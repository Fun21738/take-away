function App() {
    const check = 90
    const [count, setCount] = useState(0)
    const clickHndlr = useCallback(()=> { setCount(check) }, [check]);
    return (
        <>
            <button onClick={()=> setCount(count + 1)}>Set Count</button>
            <TestComp func={clickHndlr} />
        </>
    )
}

// useCallback will check the check variable if not same as its prev value it will
//  return the function passed so TestComp and React.memo would see a new reference and re-render TestComp, 
// if not same useCallback would return nothing so React.memo would see a function
//  reference the same as its prev value and cancel the re-render of the TestComp.