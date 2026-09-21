using UnityEngine;

namespace Kingshot.Gameplay
{
    [DefaultExecutionOrder(-100)]
    public sealed class PlayerInputReader : MonoBehaviour
    {
        [SerializeField] private VirtualJoystick virtualJoystick;

        public Vector2 MoveInput { get; private set; }

        private void Update()
        {
            Vector2 keyboardInput = new Vector2(
                Input.GetAxisRaw("Horizontal"),
                Input.GetAxisRaw("Vertical"));

            Vector2 joystickInput = virtualJoystick != null
                ? virtualJoystick.Value
                : Vector2.zero;

            MoveInput = Vector2.ClampMagnitude(keyboardInput + joystickInput, 1f);
        }

        public void SetVirtualJoystick(VirtualJoystick joystick)
        {
            virtualJoystick = joystick;
        }
    }
}
