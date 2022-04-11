import './App.css';
import PartOne from './components/PartOne';
import PartFour from './components/PartFour';
import PartThree from './components/PartThree';
import PartTwo from './components/PartTwo';

function App() {

  const items = [
      {
        id: 1,
        name: 'Cool Ranch Doritos',
        sellBy: '2025-01-15',
        orderHistory: [
            {
                sellDate: '2022-04-01',
                customerId: 5,
                amount: 2,
            },
            {
                sellDate: '2022-04-02',
                customerId: 10,
                amount: 1,
            },
        ]
      },
      {
        id: 2,
        name: 'Ramen Noodles',
        sellBy: '2030-01-01',
        orderHistory: [
            {
                sellDate: '2022-03-01',
                customerId: 7,
                amount: 10,
            },
            {
                sellDate: '2022-03-02',
                customerId: 8,
                amount: 10,
            },
        ]
      },
      {
        id: 3,
        name: 'Publix Frozen Pizza',
        sellBy: '2022-04-15',
        orderHistory: [
            {
                sellDate: '2022-04-04',
                customerId: 5,
                amount: 5,
            },
            {
                sellDate: '2022-03-25',
                customerId: 16,
                amount: 6,
            },
        ]
      },
  ];

  return (
    <div className="App">
      <h1>Tasks:</h1>
      <pre>
        <code>{`
        const items = [
      {
        id: 1,
        name: 'Cool Ranch Doritos',
        sellBy: '2025-01-15',
        orderHistory: [
            {
                sellDate: '2022-04-01',
                customerId: 5,
                amount: 2,
            },
            {
                sellDate: '2022-04-02',
                customerId: 10,
                amount: 1,
            },
        ]
      },
      {
        id: 2,
        name: 'Ramen Noodles',
        sellBy: '2030-01-01',
        orderHistory: [
            {
                sellDate: '2022-03-01',
                customerId: 7,
                amount: 10,
            },
            {
                sellDate: '2022-03-02',
                customerId: 8,
                amount: 10,
            },
        ]
      },
      {
        id: 3,
        name: 'Publix Frozen Pizza',
        sellBy: '2022-04-15',
        orderHistory: [
            {
                sellDate: '2022-04-04',
                customerId: 5,
                amount: 5,
            },
            {
                sellDate: '2022-03-25',
                customerId: 16,
                amount: 6,
            },
        ]
      },
  ];

`}</code>
      </pre>
      <PartOne
        items={items}
      />
      <PartTwo 
        items={items}
      /> 
      <PartThree 
        items={items}
      /> 
      <PartFour 
        items={items}
      />
    </div>
  );
}

export default App;
