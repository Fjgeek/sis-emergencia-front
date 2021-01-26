import React, { useState, useEffect } from 'react'
import '@material/snackbar/dist/mdc.snackbar.css'

/* Components */
import Header from '../../common/header';
import { GridList } from '../../common/grid-list'
import RoombedCard from './components/roombed-card'
import Loading from '../../common/loading';
import { createSnackbarQueue, SnackbarQueue } from '@rmwc/snackbar';

/* Data */
import RoombedHttp from '../@data/roombed-http'

/* Theme */
import { RequestTheme } from '../@style/RequestTheme'

const RoombedDetail = ({
    match,
    history
}) => {
    const { messages, notify } = createSnackbarQueue();
    const idRoom = match.params.id
    const [bedList, setBedList] = useState([])
    const [room, setRoom] = useState("Sala...")
    const [loading, setLoading] = useState(true)

    const changePriority = (index, idBed) => {
        const newBedList = [...bedList.slice()]
        let priority = "0"
        if (bedList[index].priority === "0") {
            priority = "1"
        } else {
            if (bedList[index].priority === "1") {
                priority = "2"
            } else {
                if (bedList[index].priority === "2") {
                    priority = "0"
                }
            }
        }
        newBedList[index].priority = priority
        setBedList([...newBedList])
        savePriority(idBed, idRoom, priority)
    }
    const savePriority = (idBed, idRoom, priority) => {
        RoombedHttp.updatePriority({ id_bed: idBed, id_room: idRoom, priority },
            (data) => {
                notify({
                    title: <b>Listo</b>,
                    body: data.message,
                    icon: 'check',
                    actions: [
                        {
                            title: 'Dismiss'
                        }
                    ]
                })
            },
            (error) => {
                notify({
                    title: <b>Hubo un problema</b>,
                    body: error.message,
                    icon: 'check',
                    actions: [
                        {
                            title: 'Dismiss'
                        }
                    ]
                })
            })
    }

    useEffect(() => {
        if (loading) {
            RoombedHttp.getId(idRoom,
                (data) => {
                    console.log(data)
                    if (data.status) {
                        setRoom(data.result.room_label)
                        setBedList(data.result.beds)
                    }
                    setLoading(false)
                },
                (error) => {
                    console.log(error)
                    setLoading(false)
                })
        }
    }, [setBedList, setRoom, loading, idRoom])

    return (
        <section>
            <Header
                title={room}
                match={match}
                history={history}
                theme={{
                    background: "#008000",
                    color: "#fff"
                }}
            />
            <SnackbarQueue messages={messages} />
            {
                loading ?
                    <Loading />
                    :
                    <GridList>
                        {
                            bedList.map((el, index) => (
                                <RoombedCard
                                    key={index}
                                    label={el.bed_label}
                                    subLabel={RequestTheme[el.priority].label}
                                    iconSubLabel={el.priority > 0 ? 'radio_button_checked' : 'radio_button_unchecked'}
                                    bgColor={RequestTheme[el.priority].color}
                                    textColor={RequestTheme[el.priority].textColor}
                                    onClick={() => { changePriority(index, el.id_bed) }}
                                />
                            ))
                        }
                    </GridList>
            }
        </section>
    )
}

export default RoombedDetail
