import { GlobalProvider } from "./context/GlobalState";
import Balance from "./components/Balance";
import TransactionForm from "./transactions/TransactionForm";
import TransactionsList from "./transactions/TransactionsList";
import IncomeExpenses from "./components/IncomeExpenses";
import ExpenseChart from "./components/ExpenseChart";

function App() {
  return (
    <GlobalProvider>
      <div className="bg-zinc-900 text-white h-screen flex justify-center items-center">
        <div className="container mx-auto w-3/6">
          <div className="bg-zinc-800 p-10 rounded-lg flex gap-x-2">
            <div className="">
              <h1 className="text-4xl font-bold">Expense Tracker</h1>
              <IncomeExpenses />

              <Balance />
              <TransactionForm />
            </div>
            <div className="flex flex-col flex-1">
              <ExpenseChart />
              <TransactionsList />
            </div>
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
