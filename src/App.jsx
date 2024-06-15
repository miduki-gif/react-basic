//Stateを使うときにimportするもの
import React,{ useEffect, useState} from 'react';
import {ColorfulMessage}  from './components/ColorfulMeaage';

export const App = () =>{
  //再レンダリング解説用
  console.log("--App--");
//コンポーネントのstateが更新された時にも再レンダリングされる。
//propsの受け取った値が変わったときにも再レンダリングされる。
//親のコンポーネント（この場合App）が再レンダリングされたら子のコンポーネント（今回だとColorfulMessage）も再レンダリングされる。
//UseStateは関数
//Stateの実際の状態と更新を関数で受け取っていく(2つの値は配列の分割代入で受け取る)
//useState(初期値を設定する);
//usestateだけでないが、Hook系の関数は全部関数の一番上の階層からでしか呼べないという特徴がある。

const [ num, setNum ] = useState(0);
//boolean(表示させたりしなかったりなどの時に)is,as関数名につける慣習がよくある。
const [isShowFace, setIsShowFace] = useState(false);
    const onClickCountUp = () =>{
      //()の中で渡した値を使用して更新していく。
      //stateはすぐ読み込まれるのではない
      //stateの更新を検知するともう一度コンポーネントの上から評価していく
      //上記のように毎回読みに行っていたらパフォーマンスが良くない
      //その為reactでバッチ処理を裏側でしてくれて特定の関数の中で呼ばれているset関数はまとめて実行する。
      //関数が終わったところでまとめて反映をする。
      //stateを更新するときに実際のSteteの値を関数の中で引数として持たせて参照させることができる。
      setNum((prev) => prev +1 );
    };

    const onClickToggle = () =>{
        setIsShowFace(!isShowFace); 
    };
//useEffectは第一引数に関数を受け取る仕様になっている。
//useEffectは第２引数は配列使っていく（値が変わっていくものを基本的には設定していく）
//何も配列に値を設定しないと最初のマウント時のみ鹿表示されない。
//配列に設定した値が変わったときのみ関数の中身を実行するという動き
//numのみに関心を持たせて処理をさせることができる。
//処理の関心を切り分けることができる。
    useEffect(() => {
      if (num > 0){
        if(num % 3 === 0 ){
          isShowFace || setIsShowFace(true);
        } else{
          isShowFace && setIsShowFace(false);
        }
      } 
    }, [num]);
  return (
        <>
        <h1 style={{color:"red"}}>こんにちは!</h1>
        <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
        <ColorfulMessage color="green">元気です!</ColorfulMessage>
        <button onClick={onClickCountUp}>カウントアップ</button>
        <p>{num}</p>
        <button onClick={onClickToggle}>on/off</button>
        {isShowFace &&  <p>((+_+))</p>}
        </>
    );
    };
    //条件が変わったり、振る舞いが変わったときに動的に処理を変更して表示しよう
    //propsは好きな名称を付けて値を渡していくこともできるしコンポーネントの要素を使って画面に表示したりタグで囲んでpropsを渡すこともできる。
    //Stateは状態・情報を管理するもの
    //モーダルが開いているのか・開いていないのか、エラーが発生しているのか・していないのかなど
    //特定のフラグがture時だけ要素を表示したいときに演算子とstateを使用して画面に表示をさせることができる。
    //表示されたり・消えたりすることをマウント・アンマウントとぃう

