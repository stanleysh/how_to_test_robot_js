const {newRobot, station, isWorkday, prioritizeTasks}  = require("./robot.js");

// remove .skip when you're ready to implement the test
test('test_that_foreign_robot_needing_repairs_sent_to_station_1', () => {
  // arrange
  let need_repair = true;
  let foreign_model = true;
  let vintage_model = false;
  let robot = newRobot(need_repair, foreign_model, vintage_model);

  // act
  let result = station(robot);

  // assert
  expect(result).toEqual(1);
});

test('test_that_vintage_robot_needing_repairs_sent_to_station_2', () => {
  // arrange
  let need_repair = true;
  let foreign_model = false;
  let vintage_model = true;
  let robot = newRobot(need_repair, foreign_model, vintage_model);

  // act
  let result = station(robot);

  // assert
  expect(result).toEqual(2);
});

test('test_that_standard_robot_needing_repairs_sent_to_station_3', () => {
  // arrange
  let need_repair = true;
  let foreign_model = false;
  let vintage_model = false;
  let robot = newRobot(need_repair, foreign_model, vintage_model);

  // act
  let result = station(robot);

  // assert
  expect(result).toEqual(3)
});

test('test_that_robot_in_good_condition_sent_to_station_4', () => {
  // arrange
  let need_repair = false;
  let foreign_model = false;
  let vintage_model = false;
  let robot = newRobot(need_repair, foreign_model, vintage_model);

  // act
  let result = station(robot);

  // assert
  expect(result).toEqual(4)
});

test('test_prioritize_tasks_with_empty_todo_list_returns_negative_one', () => {
  // arrange
  let need_repair = false;
  let foreign_model = false;
  let vintage_model = false;
  let robot = newRobot(need_repair, foreign_model, vintage_model);

  // act
  let result = prioritizeTasks(robot);

  // assert
  expect(result).toEqual(-1)
})

test('test_prioritize_tasks_with_todos_returns_max_todo_value', () => {
  // arrange
  let need_repair = false;
  let foreign_model = false;
  let vintage_model = false;
  let robot = newRobot(need_repair, foreign_model, vintage_model);
  robot.todos = [2, 3, 1];
  // act
  let result = prioritizeTasks(robot);

  // assert
  expect(result).toEqual(3)
});

test('test_workday_on_day_off_returns_false', () => {
  // arrange
  let need_repair = false;
  let foreign_model = false;
  let vintage_model = false;
  let robot = newRobot(need_repair, foreign_model, vintage_model);
  robot.dayOff = 10;

  // act
  let result = isWorkday(robot, 10);

  // assert
  expect(result).toEqual(false);
});

test('test_workday_not_day_off_returns_true', () => {
  // arrange
  let need_repair = false;
  let foreign_model = false;
  let vintage_model = false;
  let robot = newRobot(need_repair, foreign_model, vintage_model);
  robot.dayOff = 10;

  // act
  let result = isWorkday(robot, 9);

  // assert
  expect(result).toEqual(true);
});
