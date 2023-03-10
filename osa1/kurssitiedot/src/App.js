const App = () => {

  const Header = (props) => {
    return (
      <div>
        {props.course}
      </div>
    )
  }

  const Content = (props) => {
    return (
      <div>
        {props.part1} {props.exercises1}
        {props.part2} {props.exercises2}
        {props.part3} {props.exercises3}
      </div>
    )
  }

  const Total = (props) => {
    return (
      <div>
        Total: {props.total}
      </div>
    )
  }

  return (
    <div>
      <Header course="Half Stack application development" />
      <Content part1="Fundamentals of React" exercises1="10" />
      <Content part2="Using props to pass data" exercises2="7" />
      <Content part3="State of a component" exercises3="14" />
      <Total total={10 + 7 + 14} />
    </div>
  )
}

export default App