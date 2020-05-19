<?php

namespace ServiceLaundry\Dashboard\Controllers\Web;

use ServiceLaundry\Common\Controllers\SecureController;
use ServiceLaundry\Dashboard\Forms\Web\UserForm;
use ServiceLaundry\Order\Models\Web\Orders;
use ServiceLaundry\Order\Models\Web\Service;
use ServiceLaundry\Dashboard\Models\Web\Users;
use Phalcon\Mvc\Controller;
use Phalcon\Http\Response;

class IndexUserController extends SecureController
{
    public function initialize()
    {
        $this->memberExecutionRouter();
        $this->setFlashSessionDesign();
    }

    public function indexAction()
    {
        // Find order by the user id
        $orders = Orders::find(
            [
                'conditions' => 'user_id = :user_id:',
                'bind' => [
                    'user_id' => $this->session->get('auth')['id'],
                ]
            ]
        )->toArray();

        // Calculation
        $orderCount     = count($orders);
        $activeOrder    = 0;
        $finishedOrder  = 0;
        $waitingOrder   = 0;
        foreach ($orders as $order) {
            if ($order['order_status'] == 'Unfinished') {
                $activeOrder++;
            }
            else if ($order['order_status'] == 'Finished') {
                $finishedOrder++;
            }
            else if ($order['order_status'] == 'Waiting') {
                $waitingOrder++;
            }
        }
        
        // Send it to view
        $this->view->setVar('orderDetail', [
            0 => $orderCount,
            1 => $activeOrder,
            2 => $finishedOrder,
            3 => $waitingOrder,
        ]);
        $this->view->pick('views/indexUser');
    }
}