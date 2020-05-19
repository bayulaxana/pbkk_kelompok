<?php

namespace ServiceLaundry\Dashboard;

use Phalcon\Di\DiInterface;
use Phalcon\Loader;
use Phalcon\Mvc\ModuleDefinitionInterface;

class Module implements ModuleDefinitionInterface
{
    public function registerAutoloaders(DiInterface $di = null)
    {
        $loader = new Loader();

        $loader->registerNamespaces([
            'ServiceLaundry\Dashboard\Controllers\Web'      => __DIR__ . '/controllers',
            'ServiceLaundry\Dashboard\Models\Web'           => __DIR__ . '/models',
            'ServiceLaundry\Dashboard\Views\Web'            => __DIR__ . '/views',
            'ServiceLaundry\Dashboard\Forms\Web'            => __DIR__ . '/forms',
            'ServiceLaundry\Order\Models\Web'               => APP_PATH . '/modules/order/models',
            'ServiceLaundry\Common\Forms'                   => APP_PATH . '/form',
            'ServiceLaundry\Common\Controllers'             => APP_PATH . '/controllers'
        ]);

        $loader->register();
    }

    public function registerServices(DiInterface $di = null)
    {
        $moduleConfig = require __DIR__ . '/config/config.php';

        $di->get('config')->merge($moduleConfig);

        include_once __DIR__ . '/config/services.php';
    }
}