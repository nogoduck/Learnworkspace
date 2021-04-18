let a =
  "[['http://library.honam.ac.kr/Cheetah/Shared/CoverImage?Cno=462812', '동화 넘어 인문학 :미운 오리 새끼도 행복한 어른을 꿈꾼다(2017)', '조정현', '을유문화사', '4층 사회과학자료실(001.3 조73ㄷ)', '1권 대출가능'],['http://library.honam.ac.kr/Cheetah/Shared/CoverImage?Cno=473473', '미운 오리 백조되기 .1(2015)', '황미리', '삼양', '알수없음', '대출불가'],['http://library.honam.ac.kr/Cheetah/Shared/CoverImage?Cno=473479', '미운 오리 백조되기 .3(2015)', '황미리', '삼양', '알수없음', '대출불가'],['http://library.honam.ac.kr/Cheetah/Shared/CoverImage?Cno=473480', '미운 오리 백조되기 .4(2015)', '황미리', '삼양', '알수없음', '대출불가'],['http://library.honam.ac.kr/Cheetah/Shared/CoverImage?Cno=473481', '미운 오리 백조되기 .5(2015)', '황미리', '삼양', '알수없음', '대출불가'],['http://library.honam.ac.kr/Cheetah/Shared/CoverImage?Cno=473482', '미운 오리 백조되기 .6(2015)', '황미리', '삼양', '알수없음', '대출불가'],['http://library.honam.ac.kr/Cheetah/Shared/CoverImage?Cno=473484', '미운 오리 백조되기 .8(2015)', '황미리', '삼양', '알수없음', '대출불가'],['http://library.honam.ac.kr/Cheetah/Shared/CoverImage?Cno=473485', '미운 오리 백조되기 .9(2015)', '황미리', '삼양', '알수없음', '대출불가'],['http://library.honam.ac.kr/Cheetah/Shared/CoverImage?Cno=473474', '미운 오리 백조되기 .10(2015)', '황미리', '삼양', '알수없음', '대출불가'],['http://library.honam.ac.kr/Cheetah/Shared/CoverImage?Cno=473475', '미운 오리 백조되기 .11(2015)', '황미리', '삼양', '알수없음', '대출불가']]";

let b = a.split(",");

for (let i = 0; i < b.length; i++) {
  console.log(b[i]);
  c = b[i].replace("[", "");
  c = b[i].replace("]", "");
  c = b[i].replaceAll("'", "");

  console.log("C", c);
  for (let j = 0; j < c.length; j++) {
    console.log(c[j]);
    if (c[j] == "]") {
      console.log("TRUE");
      c[j] = "";
    }
  }

  console.log(
    "┌───────────────────────[refine data]────────────────────────::"
  );
  console.log(c);
  console.log(
    "└────────────────────────────────────────────────────────────::"
  );
}

//failed...
