const 星座リスト = ['おひつじ座', 'おうし座', 'ふたご座', 'かに座', 'しし座', 'おとめ座', 'てんびん座', 'さそり座', 'いて座', 'やぎ座', 'みずがめ座', 'うお座'];
const 性別リスト = ['男', '女'];
let 美川さん;

class Mikawa {
  constructor(星座, 性別) {
    this.星座 = 星座;
    this.性別 = 性別;
    this.気持ちよく歌いだせるか = false;
  }

  startIntro() {
    console.log('~♪');
  }

  startSinging() {
    if (this.気持ちよく歌いだせるか) {
      console.log('そうよ！私は'+this.星座+'の'+this.性別+'〜♪');
    } else {
      console.log('いいえ、私は'+this.星座+'の'+this.性別+'〜♪');
    }
  }

  isAsked(星座, 性別) {
    if (this.星座 == 星座 && this.性別 == 性別) {
      console.log('(頷く)');
      this.気持ちよく歌いだせるか = true;
      return true;
    } else {
      console.log('(首を振る)');
      return false;
    }
  }
}

function init() {
  美川さん = new Mikawa('さそり座', '女');
  美川さん.startIntro();
  console.log('うわあ！美川さんだあ！！！美川さん！美川さん！');
}

function search2() {
  for (const 星座 of 星座リスト) {
    for (const 性別 of 性別リスト) {
      console.log(星座+'の'+性別+'ですか？');
      let 返事 = 美川さん.isAsked(星座, 性別);
      if (返事) {
        return;
      }
    }
  }
}

init();
search2();
美川さん.startSinging();


