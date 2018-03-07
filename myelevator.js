/*
 * Available information:
 * 1. Request queue
 * Simulator.get_instance().get_requests()
 * Array of integers representing floors where there are people calling the elevator
 * eg: [7,3,2] // There are 3 people waiting for the elevator at floor 7,3, and 2, in that order
 *
 * 2. Elevator object
 * To get all elevators, Simulator.get_instance().get_building().get_elevator_system().get_elevators()
 * Array of Elevator objects.
 * - Current floor
 * elevator.at_floor()
 * Returns undefined if it is moving and returns the floor if it is waiting.
 * - Destination floor
 * elevator.get_destination_floor()
 * The floor the elevator is moving toward.
 * - Position
 * elevator.get_position()
 * Position of the elevator in y-axis. Not necessarily an integer.
 * - Elevator people
 * elevator.get_people()
 * Array of people inside the elevator
 *
 * 3. Person object
 * - Floor
 * person.get_floor()
 * - Destination
 * person.get_destination_floor()
 * - Get time waiting for an elevator
 * person.get_wait_time_out_elevator()
 * - Get time waiting in an elevator
 * person.get_wait_time_in_elevator()
 *
 * 4. Time counter
 * Simulator.get_instance().get_time_counter()
 * An integer increasing by 1 on every simulation iteration
 *
 * 5. Building
 * Simulator.get_instance().get_building()
 * - Number of floors
 * building.get_num_floors()
 */

// var Elevator = function() {
//
// };

Elevator.prototype.decide = function() {
    var simulator = Simulator.get_instance();
    var building = simulator.get_building();
    var num_floors = building.get_num_floors();
    var elevators = Simulator.get_instance().get_building().get_elevator_system().get_elevators();
    var time_counter = simulator.get_time_counter();
    var requests = simulator.get_requests();

    var num_elevators = simulator.get_num_elevators;
    var max_people = simulator.elevator_capacity;

    var elevator = this;
    var people = this.get_people();
    var person = people.length > 0 ? people[0] : undefined;

    if(elevator) {
        elevator.at_floor();
        elevator.get_destination_floor();
        elevator.get_position();

    }

    if(person) {
        person.get_floor();
        return this.commit_decision(person.get_destination_floor());
    }

    for(var i = 0; i<num_floors; i++){
      building[i] = max_people;
    }


    for (var i = 0; i < num_elevators; i++) {
        elevator[i] = 0;
    }

    for (var i = 0; i < num_floors; i++) {

      var constrant = 9999;
      for (var j = 1; j < elevator[i]; j++) {
          var serviced = elevator[i] - elevator[i] + 1;
          var alltime = elevator_speed_m_per_s * elevator[i];
          alltime = elevator_wait_time_s * serviced;
          avg = alltime * max_num_people / serviced;

        if(alltime + ((alltime/100)*avg)<constant){
          elevator_positions = j;
          best = alltime + ((alltime/100)*avg);
        }

        for (var k = elevator_positions; k < elevator[i]; k++) {
          elevator+=1;
        }

      }
    }

    for(var i = 0;i < requests.length;i++) {

        var handled = false;
        for(var j = 0;j < elevators.length;j++) {
            if(elevators[j].get_destination_floor() == requests[i]) {
                handled = true;
                break;
            }
        }
        if(!handled) {
          console.log(requests[i]);
            return this.commit_decision(requests[i]);
        }
    }


    return this.commit_decision(Math.floor(num_floors / 2));
};
