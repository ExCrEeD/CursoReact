import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';
import Swal from 'sweetalert2'
import { useDispatch ,useSelector} from 'react-redux';
import { eventAddNew, eventClearActiveEvent, eventUpdated } from '../../actions/events';
import { uiCloseModal } from '../../actions/ui';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');

const now = moment().minutes(0).seconds(0).add(1,'hours');

const initEvent = {
  title:'',
  notes:'',
  start:now.toDate(),
  end:now.add(1,'hours').toDate()
}

export const CalendarModal = () => {

  const dispatch = useDispatch();
  const {modalOpen} = useSelector(state=>state.ui);
  const {activeEvent} = useSelector(state=>state.calendar);
  const [startDate, setStartDate] = useState(now.toDate());
  const [endDate, setEndDate] = useState(now.add(1,'hours').toDate());
  const [titleValid, settitleValid] = useState(true);

  const [formValues, setformValues] = useState(initEvent);

  const {notes,title,start,end } = formValues;

  useEffect(() => {
      if(activeEvent)
          setformValues(activeEvent);
      else
          setformValues(initEvent);
  }, [activeEvent])
  

  const handleInputChange = ({target}) =>{
    setformValues({
        ...formValues,
        [target.name]:target.value
    })
  }

  const handleStartDate = (e) =>{
    setStartDate(e);
    setformValues({...formValues, start:e});
  }

  const handleEndDate = (e) =>{
    setEndDate(e);
    setformValues({...formValues, end:e});
  }

  const handleSubmitForm = (e) =>{
    e.preventDefault();
    const momentStart = moment(start);
    const momentEnd = moment(end);
    if(momentStart.isSameOrAfter(momentEnd))
    {
      Swal.fire('Error','La fecha fin debe ser mayor a la fecha de inio','error');
      return;
    }

    if(title.trim().length < 2 )
    {
      settitleValid(false);
      return;
    }

    console.log(activeEvent,formValues);
    if(activeEvent){
      dispatch(eventUpdated(formValues));
    }
    else{
      dispatch(eventAddNew({
        ...formValues,
        id:new Date().getTime(),
        user:{
          _id:123,
          name:"daniel"
        }
      }));
    }
    settitleValid(true);
    closeModal();
  }

  const closeModal = () => {
    dispatch(uiCloseModal());
    dispatch(eventClearActiveEvent());
    setformValues(initEvent);
  }

  return (
    <Modal
      isOpen={modalOpen}
      style={customStyles}
      onRequestClose={closeModal}
      closeTimeoutMS={200}
      className="modal"
      overlayClassName="modal-fondo"
    >
      <h1> {activeEvent?'Editar Evento':'Crear evento'} </h1>
      <hr />
      <form className="container" onSubmit={handleSubmitForm}>

        <div className="form-group">
          <label>Fecha y hora inicio</label>
          <DateTimePicker 
              onChange={handleStartDate} 
              value={startDate} 
              className="form-control"/>
        </div>

        <div className="form-group">
          <label>Fecha y hora fin</label>
          <DateTimePicker 
                onChange={handleEndDate} 
                value={endDate} 
                className="form-control" 
                minDate={startDate}
           />
        </div>

        <hr />
        <div className="form-group">
          <label>Titulo y notas</label>
          <input
            type="text"
            className={`form-control ${!titleValid? "is-invalid":"is-valid"}`}
            placeholder="Título del evento"
            name="title"
            autoComplete="off"
            value={title}
            onChange={handleInputChange}
          />
          <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
        </div>

        <div className="form-group">
          <textarea
            type="text"
            className="form-control"
            placeholder="Notas"
            rows="5"
            name="notes"
            value={notes}
            onChange={handleInputChange}
          ></textarea>
          <small id="emailHelp" className="form-text text-muted">Información adicional</small>
        </div>

        <button
          type="submit"
          className="btn btn-outline-primary btn-block"
        >
          <i className="far fa-save"></i>
          <span> Guardar</span>
        </button>

      </form>
    </Modal>
  )
}
