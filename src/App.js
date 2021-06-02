import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  // useEffect(() => {
  //   console.log("Çalıştı");
  // }, []);
  /* Yukarıdaki gibi ikinci parametreye boş dizi döndürülürse
  Program ilk yüklendiğinde bir defa çalışır ve bir daha çalışmaz.
  */

  // useEffect(() => {
  //   console.log("Çalıştı");
  // }, [count]);
  /* Yukarda ise count durumuna göre her durumu değiştiğinde 
  useEffect kısmı çalışacaktır. */

  useEffect(() => {
    console.log("Çalışıyor");
  }, [name, count]);
  /* Yukarıdaki duruma göre iki state'den herhangi birisi güncellendiğinde
  içindeki kodlar yine çalışacaktır.
  */

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log("Çalışıyor");
  //   }, 2000);

  //   return () => clearInterval(interval);
  // }, []);
  /* Yukarıdaki duruma göre lifecycle'a göre çalışan fonksiyonun temizlenmesi gerçekleşmektedir.
  ComponentDidUnmount olayını return ile temizlenebilmektedir.Aynı yerde... */

  return (
    <div className="App">
      <div>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Arttır</button>
        <input
          type="text"
          onChange={(e) => {
            document.title = name;
            setName(e.target.value);
            console.log(name);
          }}
        />
      </div>
    </div>
  );
}
