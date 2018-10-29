import React from 'react';
import { CreateKey, arrayLength } from './createKey.js';
import { designs } from '../../stylesheets/design.js';
import { layouts } from '../../stylesheets/layout.js';


const MessageBox = ({ style, keys, titles }) => (
    <div className="col-lg-12 m-auto text-center">
      <ul className="row no-dots col-lg-8 m-auto text-center"
          style={{paddingInlineStart: "0px"}}>
        {titles.map(title =>
          <li className="col-lg-4 col-sm-4 p-2"
              key={CreateKey(title)}
              console={arrayLength(titles)}
              style={designs.roundedboxes}
            > <p className="m-4">{title}</p>
          </li>
        )}
      </ul>
    </div>
);
console.log(MessageBox)
export default MessageBox;
