interface Manager extends Employee {
  numberOfDepartment: string;
  numberOfEmployeesReporting: string;
  schedulemeeting: (agenda: string) => void;
}