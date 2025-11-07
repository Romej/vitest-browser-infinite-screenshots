export default function HelloWorld({ name }: { name: string }) {
  return (
    <div>
      <h1 style={{ color: 'red' }}>Hello {name}!</h1>
    </div>
  )
}
