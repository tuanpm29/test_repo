<?php

namespace App\Providers;

use App\Services\GoogleSheetService;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton(GoogleSheetService::class, function ($app) {
            return new GoogleSheetService(base_path('google-auth.json'));
        });
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
