import styled, {css} from 'styled-components';
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
const ButtonStyle = styled.button`
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

function Button({
  //Attributes:
  className,
  type,
  //Props:
  children,
  padding,
  color,
  backgroundColor,
  width,
  fontSize,
  fontFamily,
  fontWeight,
  fontStyle,
  anchor,
  noBorder,
}) {
  return(
    <ButtonStyle
      //Attributes:
      className={className}
      type={type}
      //Props:
      padding={padding}
      color={color}
      backgroundColor={backgroundColor}
      width={width}
      fontSize={fontSize}
      fontFamily={fontFamily}
      fontWeight={fontWeight}
      fontStyle={fontStyle}
      anchor={anchor}
      noBorder={noBorder}
    >{children}</ButtonStyle>
  )
}

export default Button;