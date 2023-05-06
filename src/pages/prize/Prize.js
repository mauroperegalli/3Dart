import React from 'react'
import { PrizeContainter } from './PrizeStyles';
import Prizeproduct from "../../components/prize/Prizeproduct";

export const Prize = () => {
  return (
    <>
        <PrizeContainter>
            <Prizeproduct/>
        </PrizeContainter>
    </>
  )
}

export default Prize;