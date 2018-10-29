import React, { Component } from 'react';
import Banner from '../components/common/banner';
import ArticleBoxes from '../components/articleBoxes';
import ContactRow from '../components/contact-row';
import HearingTest from '../components/hearingTest-rows';
import { getTitles, getDescriptions, getBackgroundImgs, getLearnExploreInfo } from '../textHolder';

class Homepage extends Component {
  state = {
    learnExploreInfo: [''],
    titles: [''],
    descriptions: [''],
    backgroundImgs: ['']
  }

  componentDidMount(){
    const learnExploreInfo = getLearnExploreInfo();
    const titles = getTitles();
    const descriptions = getDescriptions();
    const backgroundImgs = getBackgroundImgs();
    this.setState({ titles, descriptions, backgroundImgs, learnExploreInfo });
  }

  descriptionText = () => {
    const Description = this.state.descriptions[0];
    return Description
  }

  render() {
    const { titles, keys, backgroundImgs, learnExploreInfo } = this.state;

    return (
      <div className="col-lg-12 col-md-12 col-sm-12 p-0">
        <div className="">
          <Banner />
        </div>
        <section>
          <ArticleBoxes
            backgroundImgs={backgroundImgs}
            keys={keys}
            titles={titles}
            description={this.descriptionText()}
            questions={learnExploreInfo}
          />
        </section>
        <section style={{ background: "rgba(0,147,208,0.1)"}}>
          <ContactRow />
        </section>
        <section>
          <HearingTest />
        </section>
      </div>
    );
  }

}

export default Homepage;
