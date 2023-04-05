import React from 'react';
import './../App.css';
import './SortingVisualizer.css';

export default class SortingVisualizer extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            array: [],
        };
    }

    componentDidMount() {
        this.newArray();
    }

    newArray() {
        const array = []
        for (let i = 0; i < 200; i++) {
            array.push(randomNumber(5,500));
        }
        this.setState({array});
    }

    mergeSort() {}

    quickSort() {}

    heapSort() {}

    bubbleSort() {}
    
    render() {
        const { array } = this.state;
        return (
          <div>
            <div className="array-container">
              {array.map((value, idx) => (
                <div
                  className="array-bar"
                  key={idx}
                  style={{ height: `${value}px` }}
                ></div>
              ))}
            </div>
            <div className="button-container">
              <button onClick={() => this.newArray()}>Generate New Array</button>
              <button onClick={() => this.mergeSort()}>Merge Sort</button>
              <button onClick={() => this.quickSort()}>Quick Sort</button>
              <button onClick={() => this.heapSort()}>Heap Sort</button>
              <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
            </div>
          </div>
        );
      }
      

}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}