// useMemo
function App() {
    const [count, setCount] = useState(0)
    
    const expFunc = (count)=> {
        waitSync(3000);
        return count * 90;
    }
    const resCount = useMemo(()=> {
        return expFunc(count)
    }, [count])
    return (
        <>
            Count: {resCount}
            <input type="text" onChange={(e)=> setCount(e.target.value)} placeholder="Set Count" />
        </>
    )
}


// Now, here the expFunc results will be cached against the input when the same
//  input occurs again useMemo will skip calling the expFunc and return the output
//   cached against the input.