<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('first_name', 20);
            $table->string('middle_name', 20)->nullable();
            $table->string('last_name', 20);
            $table->string('mobile', 20);
            $table->string('gender', 2);
            $table->string('email', 50)->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->date('dob');
            $table->string('image')->nullable();
            $table->string('material_status', 20);
            $table->string('password');
            $table->dateTime('last_login')->nullable();
            $table->tinyText('intro')->nullable();
            $table->text('profile')->nullable();
            $table->string('father_name')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
};
