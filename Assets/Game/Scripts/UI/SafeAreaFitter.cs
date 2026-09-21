using UnityEngine;

namespace Kingshot.Gameplay
{
    [RequireComponent(typeof(RectTransform))]
    public sealed class SafeAreaFitter : MonoBehaviour
    {
        private RectTransform rectTransform; private Rect lastArea;
        private void Awake() { rectTransform = GetComponent<RectTransform>(); Apply(); }
        private void Update() { if (Screen.safeArea != lastArea) Apply(); }
        private void Apply()
        {
            lastArea = Screen.safeArea;
            Vector2 min = lastArea.position; Vector2 max = lastArea.position + lastArea.size;
            min.x /= Screen.width; min.y /= Screen.height; max.x /= Screen.width; max.y /= Screen.height;
            rectTransform.anchorMin = min; rectTransform.anchorMax = max;
            rectTransform.offsetMin = Vector2.zero; rectTransform.offsetMax = Vector2.zero;
        }
    }
}
