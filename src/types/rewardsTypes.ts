import { Employee } from './employeesTypes';

export type Reward = {
  amount: number;
  timestamp: number;
  receiver: Employee;
  sender: Employee;
  message: string;
};
