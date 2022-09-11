import React, { useState } from "react";
import styles from "./App.module.css";

const App = () => {
  const [result, setResult] = useState([]);
  const [result2, setResult2] = useState([]);
  const [result3, setResult3] = useState([]);
  const [result4, setResult4] = useState([]);
  const [result5, setResult5] = useState([]);
  const rdyResult = result.join("");

  const equal = () => {
    const concatResult = parseInt(rdyResult) + parseInt(result2);
    if (concatResult && result2) {
      setResult([concatResult]);
      setResult2([]);
      return;
    }

    const multiplyResult = parseInt(rdyResult) * parseInt(result3);
    if (multiplyResult && result3) {
      setResult([multiplyResult]);
      setResult3([]);
      return;
    }
    const minusResult = parseInt(rdyResult) - parseInt(result4);
    if (minusResult && result4) {
      const filteredResult = Math.abs(minusResult);
      setResult([filteredResult]);
      setResult4([]);
      return;
    }
    const divideResult = parseInt(result5) / parseInt(rdyResult);
    if (divideResult && result5) {
      setResult([divideResult]);
      setResult5([]);
      return;
    }
  };
  const concating = () => {
    setResult2(rdyResult);
    setResult([]);
  };
  const multiply = () => {
    setResult3(rdyResult);
    setResult([]);
  };
  const minus = () => {
    setResult4(rdyResult);
    setResult([]);
  };
  const divide = () => {
    setResult5(rdyResult);
    setResult([]);
  };

  const handleDel = () => {
    setResult([]);
    setResult2([]);
    setResult3([]);
    setResult4([]);
    setResult5([]);
  };
  const num1 = () => {
    const num1 = 1;
    const collectNum1 = [...result, num1];
    setResult(collectNum1);
  };
  const num2 = () => {
    const num2 = 2;
    const collectNum2 = [...result, num2];
    setResult(collectNum2);
  };
  const num3 = () => {
    const num3 = 3;
    const collectNum3 = [...result, num3];
    setResult(collectNum3);
  };
  const num4 = () => {
    const num4 = 4;
    const collectNum4 = [...result, num4];
    setResult(collectNum4);
  };
  const num5 = () => {
    const num5 = 5;
    const collectNum5 = [...result, num5];
    setResult(collectNum5);
  };
  const num6 = () => {
    const num6 = 6;
    const collectNum6 = [...result, num6];
    setResult(collectNum6);
  };
  const num7 = () => {
    const num7 = 7;
    const collectNum7 = [...result, num7];
    setResult(collectNum7);
  };
  const num8 = () => {
    const num8 = 8;
    const collectNum8 = [...result, num8];
    setResult(collectNum8);
  };
  const num9 = () => {
    const num9 = 9;
    const collectNum9 = [...result, num9];
    setResult(collectNum9);
  };
  const num0 = () => {
    const num0 = 0;
    const collectNum0 = [...result, num0];
    setResult(collectNum0);
  };
  const dot = () => {
    const dot = ".";
    const collectdot = [...result, dot];
    setResult(collectdot);
  };

  return (
    <div className={styles.App}>
      <div className={styles["calculator-container"]}>
        <div className={`${styles.box1} ${styles.box}`}>{result}</div>

        <div className={`${styles.box2} ${styles.box}`} onClick={handleDel}>
          DEL
        </div>

        <div className={`${styles.box3} ${styles.box}`} onClick={divide}>
          /
        </div>

        <div className={`${styles.box4} ${styles.box}`} onClick={num1}>
          1
        </div>

        <div className={`${styles.box5} ${styles.box}`} onClick={num2}>
          2
        </div>
        <div className={`${styles.box6} ${styles.box}`} onClick={num3}>
          3
        </div>
        <div className={`${styles.box7} ${styles.box}`} onClick={multiply}>
          *
        </div>
        <div className={`${styles.box8} ${styles.box}`} onClick={num4}>
          4
        </div>
        <div className={`${styles.box9} ${styles.box}`} onClick={num5}>
          5
        </div>
        <div className={`${styles.box10} ${styles.box}`} onClick={num6}>
          6
        </div>
        <div className={`${styles.box11} ${styles.box}`} onClick={concating}>
          +
        </div>
        <div className={`${styles.box12} ${styles.box}`} onClick={num7}>
          7
        </div>
        <div className={`${styles.box13} ${styles.box}`} onClick={num8}>
          8
        </div>
        <div className={`${styles.box14} ${styles.box}`} onClick={num9}>
          9
        </div>
        <div className={`${styles.box15} ${styles.box}`} onClick={minus}>
          -
        </div>
        <div className={`${styles.box16} ${styles.box}`} onClick={dot}>
          .
        </div>
        <div className={`${styles.box17} ${styles.box}`} onClick={num0}>
          0
        </div>
        <div className={`${styles.box18} ${styles.box}`} onClick={equal}>
          =
        </div>
      </div>
    </div>
  );
};

export default App;
