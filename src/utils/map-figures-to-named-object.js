export default figures => figures?.reduce((obj, figure) => ({
  ...obj,
  [figure?.name]: figure?.childImageSharp?.fluid
}), {})
