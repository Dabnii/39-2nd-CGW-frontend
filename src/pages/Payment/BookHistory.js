import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Map from './Map';

const BookHistory = () => {
  const [reservationInfo, setReservationInfo] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/data/reservationData.json')
      .then(res => res.json())
      .then(data => setReservationInfo(data));
  }, []);
  return (
    <>
      <div style={{ minHeight: '550px' }} />
      <ModalBody>
        <ModalContent>
          <BookingCheck>예매내역 확인</BookingCheck>
          <BookingInfo>
            <BookingDetailInfo>
              <img src={reservationInfo.thumbnail} alt="" />
              <BookingCase>
                <MovieBody>
                  <Movie>영화명 :</Movie>
                  <MovieTitle>{reservationInfo.title}</MovieTitle>
                </MovieBody>
                <MovieBody>
                  <Movie>지역 : </Movie>
                  <MovieRegion>{reservationInfo.region}</MovieRegion>
                </MovieBody>
                <MovieBody>
                  <Movie>극장 :</Movie>
                  <MovieBranch>{reservationInfo.branch}</MovieBranch>
                </MovieBody>

                <MovieBody>
                  <Movie>날짜 :</Movie>
                  <MovieData>{reservationInfo.date}</MovieData>
                </MovieBody>
                <MovieBody>
                  <Movie>시간 :</Movie>
                  <MovieTimes>{reservationInfo.date_times}</MovieTimes>
                </MovieBody>
                <MovieBody>
                  <Movie>좌석 :</Movie>
                  <MovieSeat>{reservationInfo.seat}</MovieSeat>
                </MovieBody>
                <MovieBody>
                  <Movie>결제금액 :</Movie>
                  <PayWon>{reservationInfo.price}원</PayWon>
                </MovieBody>
              </BookingCase>
            </BookingDetailInfo>
          </BookingInfo>
          <Map />
          <LastPayBotton
            onClick={() => {
              navigate('/');
            }}
          >
            확인
          </LastPayBotton>
        </ModalContent>
      </ModalBody>
    </>
  );
};

export default BookHistory;
const ModalBody = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  background: rgba(0, 0, 0, 0.5); ;
`;

const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1000px;
  height: 750px;
  padding-bottom: 30px;
  display: flex;
  justify-content: center;
  flex-flow: column nowrap;
  align-items: center;
  border-radius: 8px;
  overflow: hidden;

  background-color: #f8f9fa;
  position: absolute;
  transform: translate(-50%, -50%);

  .block {
    display: block;
  }
`;

const BookingCheck = styled.div`
  color: #fff;
  background-color: #333333;
  height: 50px;
  font-size: 25px;
  padding: 13px;
  margin-top: 0px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  width: 1000px;
`;
const BookingInfo = styled.div`
  background-color: #f8f9fa;
  display: flex;
  justify-content: center;
  flex-flow: column nowrap;
  align-items: center;
  padding: 20px 0px;
  border-radius: 8px;

  img {
    width: 180px;
  }
`;

const Movie = styled.div`
  font-size: 18px;
  margin-right: 5px;
  font-weight: bold;
`;
const MovieTitle = styled.div`
  font-size: 18px;
`;
const MovieRegion = styled.div`
  font-size: 18px;
`;
const MovieBranch = styled.div`
  font-size: 18px;
`;

const MovieData = styled.div`
  font-size: 18px;
`;
const MovieTimes = styled.div`
  font-size: 18px;
`;
const MovieSeat = styled.div`
  font-size: 18px;
`;
const PayWon = styled.div`
  font-size: 18px;
`;

const LastPayBotton = styled.button`
  font-size: 25px;
  font-weight: bold;
  color: white;
  background-color: #fb4357;
  width: 300px;
  height: 60px;
  border: 0;
  outline: 0;
  border-radius: 20px;
  margin-top: 30px;
`;

const MovieBody = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin-bottom: 5px;
`;

const BookingCase = styled.div`
  display: flex;
  flex-flow: column nowrap;
  height: 200px;
  justify-content: center;
`;

const BookingDetailInfo = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-evenly;
  width: 1000px;
`;
