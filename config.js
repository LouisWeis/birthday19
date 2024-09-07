//LousiWei 2024.9.13
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "Give me",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "Dear little cutie",  // 同上...
        "Today",
        "2024.9.17",
        "Miss Cheng's Birthday",
        "It's after we got to know each other",
        "Second birthday",
        "Over the past year or so",
        "I have saw your",
        "Beautiful",
        "Dignified",
        "And....emmm",
        "Something strange",
        "But they are all the looks I like",
        "YAMI~~",
        "Happy Birthday!",
        "As well as Mid-autumn Festival",
        "Have you received all the gifts?",
        "The moom is very round",
        "Don't be lonely",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "Dear little cutie": "./imgs/xiaokeai.png",
        "Beautiful":"./imgs/xiaokeai.png",
        "Dignified":"./imgs/xiaokeai.png",
        "Something strang":"./imgs/xiaokeai.png",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "Click Me",
        play: "MUsic",
        bannar_coming: "Color",
        balloons_flying: "Something else?",
        cake_fadein: "Cake？",
        light_candle: "Candle？",
        wish_message: "Happy Birthday",
        story: "THere are some memories",
    }
};
