import {
  trigger,
  transition,
  style,
  query,
  group,
  animate,
} from '@angular/animations';

export const routeTransitionAnimation = trigger('routeTransition', [
  // Переход вперед (page1 -> page2): новый экран выезжает справа, текущий уходит влево
  transition('page1 => page2', [
    // Подготовка начальных стилей для входящего и исходящего экранов
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          width: '100%',
          top: 0,
          left: 0,
          transform: 'translateX(0)', // стартовые положения зададим ниже
        }),
      ],
      { optional: true }
    ),
    // Исходящий экран (leave) остается на месте, входящий (enter) стартует справа за экраном
    query(
      ':enter',
      [
        style({ transform: 'translateX(100%)', opacity: 0 }), // новый экран вне видимости (справа) и прозрачен
      ],
      { optional: true }
    ),
    query(
      ':leave',
      [
        style({ opacity: 1 }), // исходящий экран полностью видим
      ],
      { optional: true }
    ),
    // Одновременный запуск анимаций входа и выхода
    group([
      query(
        ':leave',
        [
          animate(
            '400ms cubic-bezier(0.4, 0.0, 1, 1)', // ускоряющееся исчезновение (ease-in)
            style({ transform: 'translateX(-100%)', opacity: 0 })
          ),
        ],
        { optional: true }
      ),
      query(
        ':enter',
        [
          animate(
            '400ms cubic-bezier(0.4, 0.0, 0.2, 1)', // замедляющееся появление (ease-out)
            style({ transform: 'translateX(0)', opacity: 1 })
          ),
        ],
        { optional: true }
      ),
    ]),
  ]),
  // Переход назад (page2 -> page1): экран page2 уходит вправо, предыдущий возвращается слева
  transition('page2 => page1', [
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          width: '100%',
          top: 0,
          left: 0,
          transform: 'translateX(0)',
        }),
      ],
      { optional: true }
    ),
    query(
      ':enter',
      [
        style({ transform: 'translateX(-100%)', opacity: 0 }), // предыдущий экран стартует слева за пределами видимости
      ],
      { optional: true }
    ),
    query(':leave', [style({ opacity: 1 })], { optional: true }),
    group([
      query(
        ':leave',
        [
          animate(
            '400ms cubic-bezier(0.4, 0.0, 1, 1)',
            style({ transform: 'translateX(100%)', opacity: 0 })
          ),
        ],
        { optional: true }
      ),
      query(
        ':enter',
        [
          animate(
            '400ms cubic-bezier(0.4, 0.0, 0.2, 1)',
            style({ transform: 'translateX(0)', opacity: 1 })
          ),
        ],
        { optional: true }
      ),
    ]),
  ]),
]);
