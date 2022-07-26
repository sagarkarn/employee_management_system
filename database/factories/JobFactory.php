<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Job>
 */
class JobFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {


        $department = array('IT', "HR", "Marketing", "NON-IT");
        $name = array('.NET dev', 'php dev', 'laravel dev');
        return [
            'department' => $department[$this->faker->numberBetween(0, sizeof($department) - 1)],
            'name' =>  $name[$this->faker->numberBetween(0, sizeof($name) - 1)],
            'description' => $this->faker->sentence(),
            'min_salary' => $this->faker->numberBetween(10000, 40000),
            'max_salary' => $this->faker->numberBetween(40000, 80000),

        ];
    }
}
