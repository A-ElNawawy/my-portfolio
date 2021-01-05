import styled, {css} from 'styled-components';
// Props:
// -----
// maxWidth, border, imgHeight
const input_border_color = "#e1e1e1";
const input_shadow_color = "#c9c9c9";
const gold_color = "#ae8648";
const white_color = "#ffffff";

const button_color = gold_color;
const header_color = "#444";

const card_font_family = "'Lora', serif";
const p_font_family = "'Muli', sans-serif";


const Card = styled.div`
  color: ${header_color};
  font-family: ${card_font_family};
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  max-width: ${props => props.maxWidth ? props.maxWidth : "400px"};
  min-width: 250px;
  ${props => props.border && css`
    border: 1px solid ${input_border_color};
    border-radius: 5px;
    box-shadow: 0 5px 0 0 ${input_shadow_color};
  `}
  > *{
    flex-basis: 100%;
  }
  .image{
    margin-bottom: 20px;
    height: ${props => props.imgHeight? props.imgHeight : "235px"};
    overflow: hidden;
    position: relative;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background-color: #999;
    img{
      width: 100%;
      height: 100%;
      transition: all .3s ease-in-out;
    }
    .link{
      transition: all .5s ease-in-out;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1;
      opacity: 0;
      i{
        font-size: 20px;
        color: #2a2a2a;
      }
    }
    .over-lay{
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      transition: all .5s ease-in-out;
      position: absolute;
      top: 0;
      left: 0;
      background-color: #000;
      opacity: 0;
      width: 100%;
      height: 100%;
    }
  }
  .topic{
    padding: 0 20px 20px;
    display: flex;
    flex-wrap: wrap;
    & > *{
      flex-basis: 100%;
    }
    a{
        /* Resets */
        display: block;
        text-decoration: none;
        box-sizing: border-box;
        margin: 0;
        color: inherit;
        /* ------------- */
        transition: all .3s ease-in-out;
        :link {
          text-decoration: none;
        }
        :visited {
          text-decoration: none;
        }
        :hover {
          text-decoration: none;
          cursor: pointer;
          color: ${button_color}
        }
        :active {
          text-decoration: none;
        }
      }
      .special-link{
        :link {
          text-decoration: underline;
        }
      }
    h5{
      font-size: 25px;
      margin-bottom: 25px;
      text-align: center;
      ::first-letter{
        text-transform: capitalize;
      }
    }
    p{
      font-family: ${p_font_family};
      margin-left: 15px;
    }
    .line{
      display: flex;
      margin-bottom: 20px;
    }
    label{
      font-weight: bold;
      font-family: ${card_font_family};
    }
    button{
      letter-spacing: 1px;
    }
    .action-buttons{
      display: flex;
      button:not(:last-of-type){
        margin-right: 10px;
      }
    }
  }
  :hover{
    .image{
      img{
        transform: scale(1.5)
        rotate(10deg);
      }
      .link{
        opacity: 1;
      }
      .over-lay{
        opacity: .7;
      }
    }
    .topic{
      h5{
        cursor: pointer;
      }
    }
  }
`;

// Props:
// -----
/*
  padding [ Default: "10px 20px" ]
  color [ Default: "black" ]
  backgroundColor [ Default: "white" ]
  width [ Default: "auto" ]
  fontSize [ Default: "inherit" ]
  fontFamily [ Default: "inherit" ]
  fontWeight [ Default: "normal" ]
  fontStyle [ Default: "normal" ]
  anchor [ Set It If You Will Use Anchor Inside the Button ]
  noBorder [ Set It For No Border ]
*/
const Button = styled.button`
  /* Resets */
  border: none;
  display: block;
  outline: none;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  a{
    text-decoration: none;
    color: inherit;
    padding: 0;
    margin: 0;
    display: block;
    padding: ${props => props.padding || "10px 20px"};
  }
  /* ---------------- */
  text-transform: capitalize;
  color: ${props => props.color || "black"};
  background-color: ${props => props.backgroundColor || "white"};
  width: ${props => props.width || "auto"};
  padding: ${props => props.padding || "10px 20px"};
  ${props => props.anchor && css`
    padding: 0;
  `}
  font-size: ${props => props.fontSize || "inherit"};
  font-family: ${props => props.fontFamily || "inherit"};
  font-weight: ${props => props.fontWeight || "normal"};
  font-style: ${props => props.fontStyle || "normal"};
  border-style: ${props => props.noBorder || "solid"};
  border-width: 1px;
  border-color: ${props => props.color || "black"};
  border-radius: 5px;

  /* For Hover Effect */
  a{
    /*
      To Prevent cancellation of Anchor function Occurred by Hover Effect
      We Will Increase z-index of Anchor
    */
    position: relative;
    z-index: 2;
  }
  position: relative;
  :after{
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    background-color: #000;
    opacity: 0.1;
    width: 100%;
    height: 0;
    border-radius: 5px;
    transition: all 0.3s;
  }
  :hover{
    cursor: pointer;
    :after{
      height: 100%;
    }
  }
`;

function _Card({
  img,
  alt,
  header,
  description,
  mainTech,
  For,
  originProject,
  Keywords,
  url,
  codeUrl
}) {

  return(
    <Card border className="Card">
      <div className="image">
        <img src={img} alt={alt}></img>
        <div className="link">
          <Button
            className="Button"
            width="auto"
            fontStyle="italic"
            padding="16px"
            noBorder
            anchor
          >
            <a href={url} target="_blank"><i className="fas fa-link"></i></a>
          </Button>
        </div>
        <div className="over-lay"></div>
      </div>
      <div className="topic">
        <h5><a href={url} target="_blank">{header}</a></h5>
        <div className="line">
          <label>Description:</label>
          <p>{description}</p>
        </div>
        <div className="line">
          <label>Main Technology:</label>
          <p>{mainTech}</p>
        </div>
        <div className="line">
          <label>Keywords:</label>
          <p>{Keywords}</p>
        </div>
        <div className="line">
          <label>For:</label>
          <p>{For}{originProject? <a href={originProject} target="_blank" className="special-link"> This Project</a>: null}</p>
        </div>
        <div className="action-buttons">
          <Button
            padding="9px 12px"
            anchor
            backgroundColor={button_color}
            color={white_color}
          >
            <a href={url} target="_blank">Live Web Site</a>
          </Button>
          {
            codeUrl?
              <Button
                padding="9px 12px"
                anchor
                backgroundColor={button_color}
                color={white_color}
              >
                <a href={codeUrl} target="_blank">Project Code</a>
              </Button>
            :
              null
          }
        </div>
      </div>
    </Card>
  )
}
export default _Card;

