<?php

namespace Database\Factories;

use App\Models\Job;
use App\Models\User;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Employee>
 */
class EmployeeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $users = User::all();
        $grades = array('A++', 'A+', 'A', 'B++', 'B+', 'B');

        return [
            'user_id' => $this->faker->unique()->numberBetween(1, $users->count()),
            'created_by' => $users->random()->id,
            'code' => $this->faker->unique()->numberBetween(100, $users->count() + 100),
            'start_at' => $this->faker->dateTime(),
            'job_id' => Job::factory()->create()->id,
            'grade' => $grades[$this->faker->numberBetween(0, sizeof($grades) - 1)],
            'join_date' => $this->faker->date(),
            'pf_number' => $this->faker->phoneNumber,
            'shift' => array('A', "B", "C", "D")[$this->faker->numberBetween(0, 3)],
            'working_days' => 'SUNDAY,MONDAY,TUESDAY,WEDNESDAY,THURSDAY,FRIDAY,SATURDAY'
        ];
    }
}
