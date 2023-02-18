import React, { useState } from 'react';
import ClassicLayout from './components/ClassicLayout';
import SimpleButton from './components/SimpleButton';
import TextBox from './components/TextBox';

function App() {
  const [leftHide, setLeftHide] = useState(false);
  const [rightHide, setRightHide] = useState(false);

  let leftButtonText = `${leftHide ? 'Show' : 'Hide'} Left`;
  const leftClick = () => {
    setLeftHide((prev) => {
      return !prev;
    });
  };

  let rightButtonText = `${rightHide ? 'Show' : 'Hide'} Right`;
  let rightClick = () => {
    setRightHide((prev) => {
      return !prev;
    });
  };

  return (
    <ClassicLayout>
      <ClassicLayout.Header>
        <TextBox>
          <SimpleButton onClick={leftClick}>{leftButtonText}</SimpleButton>
          <SimpleButton onClick={rightClick}>{rightButtonText}</SimpleButton>
        </TextBox>
      </ClassicLayout.Header>
      <ClassicLayout.LeftSidebar hidden={leftHide}>
        <TextBox>
          <SimpleButton onClick={leftClick}>close</SimpleButton>
        </TextBox>
      </ClassicLayout.LeftSidebar>
      <ClassicLayout.Content>
        <TextBox>
          <div>
            本手是符合棋理正规下棋，循规蹈矩。妙手乃出人意料神来之笔，玄妙入神。练好本手，铸我王者之基，自能惯战能征，所向披靡。有妙手伴身，更能出奇制胜，速战速决。但是，妙手虽好，若一味追求妙手而未能练好本手，将难免下出俗手，棋力难提。围棋如此，做人做事亦如此。对此，我辈当为求妙招炼本手，相信自将去俗创奇迹。
            <br />
            <br />
            当然，练好本手，不是墨守陈规、抱残守缺、顽固不化，更不是流于浅表、敷衍应付、罔顾大局。本手，是在理解事物发展规律的基础上，从全局的角度看，应采取的正规合理合法手段。君不见，时至今日，还有人对“三寸金莲”痴迷、对长辫眷恋，仿佛那血腥与脚气里还残存着动人的情趣；君不见，时至今日，还有人嘴上高喊着厉害了我的国，背地里却崇洋媚外，骨子里那商埠的奴性依旧充盈。这一切落后的、不合理的、有碍于国家社会发展的糟粕都不属于应守之本，而是害人害己之“俗”，是无本无源之“妙”，我们应当坚决摒弃。
            <br />
            <br />
            练好本手，也不是不追求妙手，而是在以妙手为目标，锤炼好本手。妙手是创造，本手是基础，两者相辅相成。没有对创造的不断追求，何来基础的不断超越？没有本手的千锤百炼，哪来来妙手的巧夺天工？红楼传奇的铸就离不开曹雪芹十年呕心沥血的努力，胡双钱的焊接神话源自数以百万计的练习，苏炳添跑出黄种人奇迹离不开持之以恒的科学训练！“合抱之木，生于毫末；九层之台，起于累土；千里之行，始于足下。”诚如是。
            <br />
            <br />
            很多时候，我们不是不能创造，而是懒于打基，急于求成。试想，如果数学基础概念与公式还没理解、掌握，就能着用来解决变式难题？试想，倘若外语基本单词、句式还没学会，就能用它来写论文？试想，如若书法基本笔画都不会写，就能大搞书法创作？还没打学会爬，就想着要会跑，岂不是很可笑？
            <br />
            <br />
            曾闻某书法专家大放厥词，说现代人的书法已经远超古人，之所以观众觉得写得不好，不是因其书法差，是书法评价标准存在问题。我想，在其看来练字池成墨、退笔成书冢纯粹是污染环境，读书破万卷那肯定是读书方法不对，千锤百炼那只可能是火候不够。事实真是如此？人皆知其否！殊不知，最顶级的火箭的某些关键部位也是手工捶打出来的。“求木之长者，必固其根；欲流之远者，必浚其源”魏玄成之言诚真知灼见。
            <br />
            <br />
            放眼当下，作为青年的我们，既要追求妙招，更应练好本手。唯有打好基础，练好内功，不驰于空想，不骛于虚声。本招在手，天下任我走！作为国家，也应注重本业实业。当今世界暗潮涌动，唯有全面夯实，方能不被卡喉咙，方能真正威慑八方，方能永世屹立不倒。（江湖夜雨）
            <br />
            <br />
          </div>
        </TextBox>
      </ClassicLayout.Content>
      <ClassicLayout.RightSidebar hidden={rightHide}>
        <TextBox>
          <SimpleButton onClick={rightClick}>close</SimpleButton>
        </TextBox>
      </ClassicLayout.RightSidebar>
      <ClassicLayout.Footer>
        <TextBox>Footer</TextBox>
      </ClassicLayout.Footer>
    </ClassicLayout>
  );
}

export default App;
