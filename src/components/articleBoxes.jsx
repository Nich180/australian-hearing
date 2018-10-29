import React, { Component } from 'react';
import ArticleBox from './common/articleBox';
import MessageBox from './common/messageBox';
import { layouts } from '../stylesheets/layout.js';
import { designs } from '../stylesheets/design.js';
class ArticleBoxes extends Component {
    state = {
      titles: [''],
      backgrounds: ['']
    }

    componentDidMount(){
      const titles = this.props.titles;
      this.setState({ titles });
    }

    titleText = (startIndex, endIndex) => {
      const Titles = this.props.titles;
      const FilteredTitles = [];
      for (let index = startIndex; index < endIndex; index++){
        FilteredTitles.push(Titles[index]);
      }

      return FilteredTitles;
    }

    backgroundSelection = (startIndex, endIndex) => {
      const Backgrounds = this.props.backgroundImgs;
      const FilteredBgs = [];
      for (let index = startIndex; index < endIndex; index++){
        FilteredBgs.push(Backgrounds[index]);
      }

      return FilteredBgs;
    }
  render() {
    const { keys, description, backgroundImgs, questions } = this.props;

    return (
      <div className= "text-center"
           style={{padding: "75px 0px 50px" }}>
        <article className="col-lg-12 m-auto ">
          <h3 className="mb-5">Learn and explore</h3>
          <MessageBox
            style={layouts.articleBoxes}
            keys={keys}
            titles={questions}
          />
        </article>
        <div className="article-row">
        <article className="col-lg-4 mb-4 m-auto">
          <h3>My Hearing</h3>
          <p>
            Whether you need help recognising the signs of hearing loss,
            finding the best hearing device or managing tinnitus, we're
            here to help. Our experts offer practical advice and information
            to help you care for your hearing and overall wellbeing.
          </p>
        </article>
        <section className="m-auto col-lg-12">
          <ArticleBox
            backgrounds={this.backgroundSelection(0, 3)}
            style={layouts.articleBoxes}
            keys={keys}
            titles={this.titleText(0, 3)}
            description={description}
           />
           <button className="btn text-white btn-warning"
                   style={designs.orangeButton}>Read more articles</button>
         </section>
         </div>


         <div className="article-row">
         <article className="col-lg-4 spacing m-auto">
           <h3>Tinnitus</h3>
           <p>
             Whether you need help recognising the signs of hearing loss,
             finding the best hearing device or managing tinnitus, we're
             here to help. Our experts offer practical advice and information
             to help you care for your hearing and overall wellbeing.
           </p>
         </article>
         <section className="col-lg-12">
           <ArticleBox
             backgrounds={this.backgroundSelection(3, 6)}
             style={layouts.articleBoxes}
             keys={keys}
             titles={this.titleText(3, 6)}
             description={description}
            />

            <button className="btn text-white"
                    style={designs.orangeButton}>Read more articles</button>
          </section>
          </div>


          <div className="article-row">
          <article className="m-auto col-lg-4 spacing m-auto">
            <h3>Helping others</h3>
            <p>
              Whether you need help recognising the signs of hearing loss,
              finding the best hearing device or managing tinnitus, we're
              here to help. Our experts offer practical advice and information
              to help you care for your hearing and overall wellbeing.
            </p>
          </article>
          <section className="m-auto col-lg-12">
            <ArticleBox
              backgrounds={this.backgroundSelection(2, 5)}
              style={layouts.articleBoxes}
              keys={keys}
              titles={this.titleText(4, 7)}
              description={description}
             />

             <button className="btn text-white"
                     style={designs.orangeButton}>Read more articles</button>
           </section>
          </div>
      </div>
    );
  }

}

export default ArticleBoxes;
