<?php

use Illuminate\Support\Facades\Artisan;

Artisan::command('inspire', function () {
    $this->comment('Keep shipping great software.');
})->purpose('Display an inspiring quote');
