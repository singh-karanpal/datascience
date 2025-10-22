import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import Header from './components/Header.jsx'
import { AddDataset } from './components/AddDataset.jsx'
import { ShowDataset } from './components/showDataset.jsx'

function App() {
  // const [datasets, setDatasets] = useState([]);
  const [datasets, setDatasets] = useState(JSON.parse(localStorage.getItem('datasets')) || []);
  const [status, setStatus] = useState("Raw");

  const [record, setRecord] = useState({});

  useEffect(() => {
    localStorage.setItem('datasets', JSON.stringify(datasets));
  }, [datasets])


  return (
    <>
      <Header />
      <AddDataset
        datasets={datasets} setDatasets={setDatasets}
        status={status} setStatus={setStatus}
        record={record} setRecord={setRecord}
      />
      <ShowDataset
        datasets={datasets} setDatasets={setDatasets}
        status={status} setStatus={setStatus}
        record={record} setRecord={setRecord}
      />
    </>
  )
}

export default App
