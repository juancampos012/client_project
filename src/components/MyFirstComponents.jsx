import React from "react";
import { Card } from "antd";
import "./MyFirstComponents.scss"

export const MyFirstComponents = () => {
    const card_content = [
        {
          title: "Card 1", 
          size: "small", 
          extra: (<html>
                    <head>
                    </head>
                    <body>
                        <a href='#'>Ver mas</a>
                    </body>
                  </html>)
        },
        {
          title: "Card 2", 
          size: "small", 
          extra: (<html>
                    <head>
                    </head>
                    <body>
                        <a href='#'>Ver mas</a>
                    </body>
                  </html>)
        },
        {
          title: "Card 3", 
          size: "small", 
          extra: (<html>
                    <head>
                    </head>
                    <body>
                        <a href='#'>Ver mas</a>
                    </body>
                  </html>)
        },
        {
          title: "Card 4", 
          size: "small", 
          extra: (<html>
                    <head>
                    </head>
                    <body>
                        <a href='#'>Ver mas</a>
                    </body>
                  </html>)
        }
    ];
  return (
    <>
    <div className="card-content">
        {card_content.map((card) => {
          return (
            <Card
              className="card-style"
              hoverable
              title={card.title}
              extra={card.extra}
              size={card.size}
            >
              <div>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero laboriosam commodi rerum reprehenderit consequuntur eius, sit et voluptatem id. Ea sit illo modi quibusdam nam deleniti iste rem voluptatem enim!
              </div>
            </Card>
          );
        })}
      </div>
    </>
  );
};