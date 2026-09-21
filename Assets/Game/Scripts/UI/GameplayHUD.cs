using UnityEngine;
using UnityEngine.UI;

namespace Kingshot.Gameplay
{
    public sealed class GameplayHUD : MonoBehaviour
    {
        private PlayerWallet wallet; private Health playerHealth; private Health castleHealth;
        private GameSession session; private Text status; private Text guide; private GameObject resultPanel; private Text resultText;

        public void Configure(PlayerWallet playerWallet, Health player, Health castle, GameSession gameSession)
        {
            wallet = playerWallet; playerHealth = player; castleHealth = castle; session = gameSession;
            Build();
            session.ResultChanged += ShowResult;
        }

        public void SetGuide(string message) { if (guide != null) guide.text = message; }

        private void Update()
        {
            if (status == null || wallet == null) return;
            status.text = $"金币 {wallet.Coins}/{wallet.Capacity}    国王 {playerHealth.CurrentHealth}    城堡 {castleHealth.CurrentHealth}";
        }

        private void Build()
        {
            status = CreateText("Status", transform, 28, TextAnchor.UpperCenter);
            SetRect(status.rectTransform, new Vector2(0.12f, 0.9f), new Vector2(0.88f, 0.99f), Vector2.zero, Vector2.zero);
            guide = CreateText("Guide", transform, 30, TextAnchor.MiddleCenter);
            SetRect(guide.rectTransform, new Vector2(0.15f, 0.78f), new Vector2(0.85f, 0.88f), Vector2.zero, Vector2.zero);

            resultPanel = new GameObject("ResultPanel", typeof(RectTransform), typeof(Image));
            resultPanel.transform.SetParent(transform, false);
            resultPanel.GetComponent<Image>().color = new Color(0f, 0f, 0f, 0.75f);
            SetRect(resultPanel.GetComponent<RectTransform>(), new Vector2(0.25f, 0.25f), new Vector2(0.75f, 0.75f), Vector2.zero, Vector2.zero);
            resultText = CreateText("Result", resultPanel.transform, 48, TextAnchor.MiddleCenter);
            SetRect(resultText.rectTransform, new Vector2(0f, 0.25f), new Vector2(1f, 0.85f), Vector2.zero, Vector2.zero);
            GameObject buttonObject = new GameObject("Restart", typeof(RectTransform), typeof(Image), typeof(Button));
            buttonObject.transform.SetParent(resultPanel.transform, false);
            buttonObject.GetComponent<Image>().color = new Color(0.15f, 0.55f, 0.9f);
            SetRect(buttonObject.GetComponent<RectTransform>(), new Vector2(0.3f, 0.08f), new Vector2(0.7f, 0.3f), Vector2.zero, Vector2.zero);
            Text buttonText = CreateText("Label", buttonObject.transform, 28, TextAnchor.MiddleCenter); buttonText.text = "重新开始";
            SetRect(buttonText.rectTransform, Vector2.zero, Vector2.one, Vector2.zero, Vector2.zero);
            buttonObject.GetComponent<Button>().onClick.AddListener(session.Restart);
            resultPanel.SetActive(false);
        }

        private void ShowResult(GameSession.Result result)
        { resultPanel.SetActive(true); resultText.text = result == GameSession.Result.Victory ? "胜利" : "失败"; }

        private static Text CreateText(string name, Transform parent, int size, TextAnchor alignment)
        {
            GameObject item = new GameObject(name, typeof(RectTransform), typeof(CanvasRenderer), typeof(Text));
            item.transform.SetParent(parent, false); Text text = item.GetComponent<Text>();
            text.font = Resources.GetBuiltinResource<Font>("LegacyRuntime.ttf"); text.fontSize = size; text.alignment = alignment;
            text.color = Color.white; text.resizeTextForBestFit = true; return text;
        }

        private static void SetRect(RectTransform rect, Vector2 min, Vector2 max, Vector2 anchored, Vector2 size)
        { rect.anchorMin = min; rect.anchorMax = max; rect.offsetMin = Vector2.zero; rect.offsetMax = Vector2.zero; rect.anchoredPosition = anchored; rect.sizeDelta = size; }

        private void OnDestroy() { if (session != null) session.ResultChanged -= ShowResult; }
    }
}
