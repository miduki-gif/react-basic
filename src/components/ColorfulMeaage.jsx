import React from 'react';

export const ColorfulMessage = ({ color, children }) =>{
//コンポーネント側にpropsがオブジェクトとして渡ってきていることが確認できる。
//再レンダリング解説用
console.log("--ColorfulMessage--");
// const { color, children } = props;
    const contentStyleA = {
       color,
        fontSize:"18px",
        margin:100
    };
    return(
         //propsはオブジェクトとして渡ってきているのであとは値を指定してアクセスして動的に表示できるようにしたらOK！
        //タグで囲ったpropsを受け取るにはprops.childrenのように書く（オブジェクトとして定義しなくてよい）
        //コンポーネントの引数の部分でpropsをオブジェクトとして分割代入することができる
        //下記のような書き方{ color, children }
        <>
        <p style={contentStyleA}>{children}</p>
        </>
    );
}
