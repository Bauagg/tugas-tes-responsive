import { useEffect, useState } from "react"
import { Col, Container, Row, Button } from "react-bootstrap"

const StoptWarch = () => {
    const [time, setTime] = useState(0)
    const [lapTimes, setLapTimes] = useState([])
    const [toggleTime, setToggleTime] = useState(false)
    const [timerInterval, setTimerInterval] = useState(null)

    const hendleTimer = (numberMenit) => {
        const menit = Math.floor(numberMenit / 60000)
        const detik = ((numberMenit % 60000) / 1000).toFixed(0).padStart(2, '0')
        const miliSecondFormat = (numberMenit % 1000).toFixed(0).padStart(3, '0')

        return `${menit} : ${detik} : ${miliSecondFormat}`
    }

    useEffect(() => {
        if (toggleTime) {
            if (!timerInterval) {
                const interval = setInterval(() => {
                    setTime(curenTime => curenTime + 10)
                }, 10)
                setTimerInterval(interval)
            }
        } else {
            clearInterval(timerInterval)
            setTimerInterval(null);
        }

        return () => clearInterval(timerInterval)
    }, [toggleTime, timerInterval])

    return (
        <div>
            <Container>
                <Row className="mt-5">
                    <Col>
                        <Button variant="primary" onClick={() => setToggleTime(!toggleTime)}>{toggleTime ? 'Pause' : 'Start'}</Button>
                        <Button variant="warning" className="mx-1" onClick={() => {
                            setLapTimes([...lapTimes, time])
                        }}>Flag</Button>
                        <Button variant="danger" onClick={() => {
                            setToggleTime(false)
                            clearInterval(timerInterval)
                            setTime(0)
                            setLapTimes([])
                            setTimerInterval(null)
                        }}>Stop</Button>
                        <h1>{hendleTimer(time)}</h1>

                        <div className="mt-5">
                            <h1>Lap Timer :</h1>
                            <ul>
                                {
                                    lapTimes.map((catatwaktu, index) => {
                                        return (
                                            <li key={index}>
                                                {hendleTimer(catatwaktu)}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default StoptWarch