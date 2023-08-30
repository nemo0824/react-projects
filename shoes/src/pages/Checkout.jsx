import { useEffect, useRef, useState } from "react";
import { loadPaymentWidget } from "@tosspayments/payment-widget-sdk";
import { nanoid } from "nanoid";

const selector = "#payment-widget";
const clientKey = "test_ck_ex6BJGQOVD9xpR0XPORrW4w2zNbg";
const customerKey = "test_sk_6BYq7GWPVv5vgq42egl3NE5vbo1d";

export function CheckoutPage(props) {
  const paymentWidgetRef = useRef(null);
  const paymentMethodsWidgetRef = useRef(null);
  const [price, setPrice] = useState(props.totalPrice);


  useEffect(() => {
    (async () => {
      const paymentWidget = await loadPaymentWidget(clientKey, customerKey);

      const paymentMethodsWidget = paymentWidget.renderPaymentMethods(
        selector,
        { value: price }
      );

      paymentWidgetRef.current = paymentWidget;
      paymentMethodsWidgetRef.current = paymentMethodsWidget;
    })();
  }, []);

  useEffect(() => {
    const paymentMethodsWidget = paymentMethodsWidgetRef.current;

    if (paymentMethodsWidget == null) {
      return;
    }

    paymentMethodsWidget.updateAmount(
      price,
      
    );
  }, [price]);

  return (
    <div className="payorder">
      <h2>주문서</h2>
      <p>가격 : {`${props.totalPrice.toLocaleString()}원`}</p>
      <p>주소 :{`${props.fullAddress.toLocaleString()}`}</p>
      <div>
       
      </div>
      <div id="payment-widget" />
      <button
        onClick={async () => {
          const paymentWidget = paymentWidgetRef.current;

          try {
            await paymentWidget?.requestPayment({
              orderId: nanoid(),
              orderName: "토스 티셔츠 외 2건",
              customerName: "김토스",
              customerEmail: "customer123@gmail.com",
              successUrl: `${window.location.origin}/success`,
              failUrl: `${window.location.origin}/fail`
            });
          } catch (error) {
            
          }
        }}
      >
        결제하기
      </button>
    </div>
  );
}
