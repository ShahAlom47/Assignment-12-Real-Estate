
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckOutForm from './CheckOutForm';
import { useParams } from 'react-router-dom';
const stripePromise = loadStripe('pk_test_51PKiBjL0G1CCoDyDqmFNbtZ2xirq6kQGJNIeLWUtxqtLDWHXcCePls2KhxUB70IizVU7RlzrylIiesFuke0I1mwh00YdN38b1Y');
const PaymentPage = () => {
    const  {id}= useParams()

  
   
  
    return (
        <div className="p-8 ">
            <div className=" border-b-2 pb-3">
                <h1 className="text-3xl font-bold">Payment</h1>
            </div>
            <div>
                <Elements stripe={stripePromise} >
                    <CheckOutForm propertyId={id} />
                </Elements>


            </div>

        </div>
    );
};

export default PaymentPage;