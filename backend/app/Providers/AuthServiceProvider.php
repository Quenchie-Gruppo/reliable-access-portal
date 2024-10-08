<?php

namespace App\Providers;

use App\Models\Device;
use App\Models\Package; // Importing Package model
use App\Policies\DevicePolicy;
use App\Policies\PackagePolicy; // Importing PackagePolicy
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        Device::class => DevicePolicy::class, // Registering the DevicePolicy
        Package::class => PackagePolicy::class, // Registering the PackagePolicy
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        // You can define additional gates here if necessary
    }
}
