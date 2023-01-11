/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PaymentKakao = () => {
  // approval url
  const location = useLocation();
  const CODE = location.search.split('=')[1];
  const navigate = useNavigate();
  const price = localStorage.getItem('price');

  useEffect(() => {
    if (!CODE) return;

    fetch('http://10.58.52.234:3000/kakaoPayment/approval', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        pgToken: CODE,
        userId: 1,
        totalPrice: price,
        tid: localStorage.getItem('tid'),
        movieOptionsSeatId: [1, 2, 3],
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.message === 'PAYMENT_SUCCESS') {
          localStorage.setItem('paymentSuccess', 'true');
          localStorage.removeItem('tid');
          navigate('/bookhistory');
        }
      });
  }, [CODE]);

  return <button>결제완료하기</button>;
};

export default PaymentKakao;
