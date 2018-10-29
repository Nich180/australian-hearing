import React from 'react';
import { CreateKey, arrayLength } from './createKey.js';
import { designs } from '../../stylesheets/design.js';
import { layouts } from '../../stylesheets/layout.js';

const backgroundRotation = (design, background) => {
  const backgroundImgUrl = `url('${background[0]}')`;
  const articleDiv = {...design, "backgroundImage": backgroundImgUrl}
  background.shift();

  return articleDiv
}

const ArticleBox = ({ style, titles, description, backgrounds }) => {
    let design;
    if(typeof(style) === 'object') design = style;

    return (
      <div className="col-lg-10 m-auto">
        <ul className="row d-flex no-dots height-fill" 
            style={layouts.articleContainer}>
          {titles.map(title =>
            <li className="col-lg-4 col-sm-4 flex-fill position-relative"
                key={CreateKey(title)}
                console={arrayLength(titles)}
                style={{height: "500px"}}
              >
              <div className="element position-relative" style={layouts.articleHoverParent}>
              <div className=" backg-img w-100"
                    style={backgroundRotation(design, backgrounds)} >

                </div>
              <div className="element-child p-4 pt-5 text-left position-absolute"
                   style={layouts.articleHover}>
                <div className="element-header"><h2>{title}</h2></div>
                <div className="element-parag"><p>{description}</p></div>
                <div className="position-absolute" style={{ bottom: "20px"}}>
                  <img
                  src="https://a.icons8.com/ZjcZujZZ/SIDKMm/tag_display-copy-2.svg"
                  alt="family-tag"
                  />
                </div>
              </div>
              </div>
            </li>
          )}
        </ul>
      </div>
    );
  }


export default ArticleBox;
