import React, { useState } from "react";
import { ArrayDisplay } from "./ArrayDisplay.js";
import { Slider } from "./Slider.js";

function App() {
  const [arr, setArr] = useState([])

  // Random Array Generator
  const generateRandomArray = () => {
    const randomArray = []
    for (let i = 1; i < sliderValue; i++) {
      randomArray.push(Math.floor(Math.random() * 50) + 1)
    }

    setArr(randomArray)
  };

  const [sliderValue, setSliderValue] = useState(0);

  function handleSliderChange(value) {
    setSliderValue(value)
    generateRandomArray()
  }

  // Bubble Sort Algorithm
  function bubbleSort() {
    let i = 0;
    let j = 0;
    let swapped = false
  
    const interval = setInterval(() => {
      if (i < arr.length - 1) {
        if (j < arr.length - i - 1) {
          if (arr[j] > arr[j + 1]) {
            const temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = temp
            swapped = true
            setArr([...arr])
          }
          j++
        } else {
          if (!swapped) {
            clearInterval(interval)
            return;
          }
          i++
          j = 0
          swapped = false
        }
      } else {
        clearInterval(interval)
        return
      }
    }, 100)
  }
  
  // Insertion Sort Algorithm
  function insertionSort() {
    for (let i = 1; i < arr.length; i++) {
        let j = i - 1
        
        setInterval(() => {
            if(arr[i] < arr[j]) { // i=11 j=34
                const temp = arr[j]
                arr[j] = arr[i]
                arr[i] = temp
                j--
                i--
                setArr([...arr])
            }
        }, 100)
    }
  }

// Merge Sort Algorithm
    function mergeSortHelper() {
        const steps = getMergeSortSteps(arr)
        const delay = 100
        let i = 0
    
        const interval = setInterval(() => {
        setArr(steps[i])
        i++
    
        if (i === steps.length) {
            clearInterval(interval)
        }
        }, delay)
    }
    
    function getMergeSortSteps(arr) {
        const steps = []
        mergeSort(arr, 0, arr.length - 1, steps)
        return steps
    }
    
    function mergeSort(arr, l, r, steps) {
        if (l >= r) {
        return
        }
    
        const m = Math.floor((l + r) / 2)
        mergeSort(arr, l, m, steps)
        mergeSort(arr, m + 1, r, steps)
        merge(arr, l, m, r, steps)
    }
    
    function merge(arr, l, m, r, steps) {
        const n1 = m - l + 1
        const n2 = r - m
        const L = []
        const R = []
    
        for (let i = 0; i < n1; i++) {
        L.push(arr[l + i])
        }
    
        for (let j = 0; j < n2; j++) {
        R.push(arr[m + 1 + j])
        }
    
        let i = 0
        let j = 0
        let k = l
    
        while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i]
            i++
        } else {
            arr[k] = R[j]
            j++
        }
        k++
        steps.push([...arr]) // Add current state of array to steps
        }
    
        while (i < n1) {
        arr[k] = L[i]
        i++
        k++
        steps.push([...arr]) // Add current state of array to steps
        }
    
        while (j < n2) {
        arr[k] = R[j]
        j++
        k++
        steps.push([...arr]) // Add current state of array to steps
        }
    }

  return (
    <div className="App">
      <h1>Sorting Algorithm Visualizer</h1>
      <button onClick={generateRandomArray}>Generate Random Array</button>
      <button onClick={bubbleSort}>Bubble Sort</button>
      <button onClick={insertionSort}>Insertion Sort</button>
      <button onClick={mergeSortHelper}>Merge Sort</button>
      <ArrayDisplay arr={arr}  length={arr.length} />
      <Slider onChange={handleSliderChange}/>
    </div>
  )
}

export default App
