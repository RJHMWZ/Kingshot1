using UnityEngine;
using UnityEngine.EventSystems;

namespace Kingshot.Gameplay
{
    public sealed class VirtualJoystick : MonoBehaviour,
        IPointerDownHandler, IDragHandler, IPointerUpHandler
    {
        [SerializeField] private RectTransform background;
        [SerializeField] private RectTransform handle;
        [SerializeField, Range(0.1f, 1f)] private float handleRange = 0.65f;

        public Vector2 Value { get; private set; }

        public void Configure(RectTransform joystickBackground, RectTransform joystickHandle)
        {
            background = joystickBackground;
            handle = joystickHandle;
        }

        public void OnPointerDown(PointerEventData eventData)
        {
            OnDrag(eventData);
        }

        public void OnDrag(PointerEventData eventData)
        {
            if (background == null || handle == null)
            {
                return;
            }

            Camera eventCamera = eventData.pressEventCamera;
            if (!RectTransformUtility.ScreenPointToLocalPointInRectangle(
                    background, eventData.position, eventCamera, out Vector2 localPoint))
            {
                return;
            }

            Vector2 halfSize = background.rect.size * 0.5f;
            Vector2 normalized = new Vector2(
                halfSize.x > 0f ? localPoint.x / halfSize.x : 0f,
                halfSize.y > 0f ? localPoint.y / halfSize.y : 0f);

            Value = Vector2.ClampMagnitude(normalized, 1f);
            handle.anchoredPosition = new Vector2(
                Value.x * halfSize.x * handleRange,
                Value.y * halfSize.y * handleRange);
        }

        public void OnPointerUp(PointerEventData eventData)
        {
            Value = Vector2.zero;
            if (handle != null)
            {
                handle.anchoredPosition = Vector2.zero;
            }
        }

        private void OnDisable()
        {
            Value = Vector2.zero;
            if (handle != null)
            {
                handle.anchoredPosition = Vector2.zero;
            }
        }
    }
}
