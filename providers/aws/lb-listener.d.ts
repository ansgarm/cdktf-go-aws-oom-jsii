import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LbListenerConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#alpn_policy LbListener#alpn_policy}.
     */
    readonly alpnPolicy?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#certificate_arn LbListener#certificate_arn}.
     */
    readonly certificateArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#load_balancer_arn LbListener#load_balancer_arn}.
     */
    readonly loadBalancerArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#port LbListener#port}.
     */
    readonly port?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#protocol LbListener#protocol}.
     */
    readonly protocol?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#ssl_policy LbListener#ssl_policy}.
     */
    readonly sslPolicy?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#tags LbListener#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#tags_all LbListener#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * default_action block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#default_action LbListener#default_action}
     */
    readonly defaultAction: LbListenerDefaultAction[];
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#timeouts LbListener#timeouts}
     */
    readonly timeouts?: LbListenerTimeouts;
}
export interface LbListenerDefaultActionAuthenticateCognito {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#authentication_request_extra_params LbListener#authentication_request_extra_params}.
     */
    readonly authenticationRequestExtraParams?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#on_unauthenticated_request LbListener#on_unauthenticated_request}.
     */
    readonly onUnauthenticatedRequest?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#scope LbListener#scope}.
     */
    readonly scope?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#session_cookie_name LbListener#session_cookie_name}.
     */
    readonly sessionCookieName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#session_timeout LbListener#session_timeout}.
     */
    readonly sessionTimeout?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#user_pool_arn LbListener#user_pool_arn}.
     */
    readonly userPoolArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#user_pool_client_id LbListener#user_pool_client_id}.
     */
    readonly userPoolClientId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#user_pool_domain LbListener#user_pool_domain}.
     */
    readonly userPoolDomain: string;
}
export interface LbListenerDefaultActionAuthenticateOidc {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#authentication_request_extra_params LbListener#authentication_request_extra_params}.
     */
    readonly authenticationRequestExtraParams?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#authorization_endpoint LbListener#authorization_endpoint}.
     */
    readonly authorizationEndpoint: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#client_id LbListener#client_id}.
     */
    readonly clientId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#client_secret LbListener#client_secret}.
     */
    readonly clientSecret: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#issuer LbListener#issuer}.
     */
    readonly issuer: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#on_unauthenticated_request LbListener#on_unauthenticated_request}.
     */
    readonly onUnauthenticatedRequest?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#scope LbListener#scope}.
     */
    readonly scope?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#session_cookie_name LbListener#session_cookie_name}.
     */
    readonly sessionCookieName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#session_timeout LbListener#session_timeout}.
     */
    readonly sessionTimeout?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#token_endpoint LbListener#token_endpoint}.
     */
    readonly tokenEndpoint: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#user_info_endpoint LbListener#user_info_endpoint}.
     */
    readonly userInfoEndpoint: string;
}
export interface LbListenerDefaultActionFixedResponse {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#content_type LbListener#content_type}.
     */
    readonly contentType: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#message_body LbListener#message_body}.
     */
    readonly messageBody?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#status_code LbListener#status_code}.
     */
    readonly statusCode?: string;
}
export interface LbListenerDefaultActionForwardStickiness {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#duration LbListener#duration}.
     */
    readonly duration: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#enabled LbListener#enabled}.
     */
    readonly enabled?: boolean;
}
export interface LbListenerDefaultActionForwardTargetGroup {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#arn LbListener#arn}.
     */
    readonly arn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#weight LbListener#weight}.
     */
    readonly weight?: number;
}
export interface LbListenerDefaultActionForward {
    /**
     * stickiness block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#stickiness LbListener#stickiness}
     */
    readonly stickiness?: LbListenerDefaultActionForwardStickiness[];
    /**
     * target_group block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#target_group LbListener#target_group}
     */
    readonly targetGroup: LbListenerDefaultActionForwardTargetGroup[];
}
export interface LbListenerDefaultActionRedirect {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#host LbListener#host}.
     */
    readonly host?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#path LbListener#path}.
     */
    readonly path?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#port LbListener#port}.
     */
    readonly port?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#protocol LbListener#protocol}.
     */
    readonly protocol?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#query LbListener#query}.
     */
    readonly query?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#status_code LbListener#status_code}.
     */
    readonly statusCode: string;
}
export interface LbListenerDefaultAction {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#order LbListener#order}.
     */
    readonly order?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#target_group_arn LbListener#target_group_arn}.
     */
    readonly targetGroupArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#type LbListener#type}.
     */
    readonly type: string;
    /**
     * authenticate_cognito block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#authenticate_cognito LbListener#authenticate_cognito}
     */
    readonly authenticateCognito?: LbListenerDefaultActionAuthenticateCognito[];
    /**
     * authenticate_oidc block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#authenticate_oidc LbListener#authenticate_oidc}
     */
    readonly authenticateOidc?: LbListenerDefaultActionAuthenticateOidc[];
    /**
     * fixed_response block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#fixed_response LbListener#fixed_response}
     */
    readonly fixedResponse?: LbListenerDefaultActionFixedResponse[];
    /**
     * forward block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#forward LbListener#forward}
     */
    readonly forward?: LbListenerDefaultActionForward[];
    /**
     * redirect block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#redirect LbListener#redirect}
     */
    readonly redirect?: LbListenerDefaultActionRedirect[];
}
export interface LbListenerTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#read LbListener#read}.
     */
    readonly read?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html aws_lb_listener}.
 */
export declare class LbListener extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html aws_lb_listener} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: LbListenerConfig);
    private _alpnPolicy?;
    get alpnPolicy(): string;
    set alpnPolicy(value: string);
    resetAlpnPolicy(): void;
    get alpnPolicyInput(): string | undefined;
    get arn(): string;
    private _certificateArn?;
    get certificateArn(): string;
    set certificateArn(value: string);
    resetCertificateArn(): void;
    get certificateArnInput(): string | undefined;
    get id(): string;
    private _loadBalancerArn;
    get loadBalancerArn(): string;
    set loadBalancerArn(value: string);
    get loadBalancerArnInput(): string;
    private _port?;
    get port(): number;
    set port(value: number);
    resetPort(): void;
    get portInput(): number | undefined;
    private _protocol?;
    get protocol(): string;
    set protocol(value: string);
    resetProtocol(): void;
    get protocolInput(): string | undefined;
    private _sslPolicy?;
    get sslPolicy(): string;
    set sslPolicy(value: string);
    resetSslPolicy(): void;
    get sslPolicyInput(): string | undefined;
    private _tags?;
    get tags(): {
        [key: string]: string;
    };
    set tags(value: {
        [key: string]: string;
    });
    resetTags(): void;
    get tagsInput(): {
        [key: string]: string;
    } | undefined;
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    };
    set tagsAll(value: {
        [key: string]: string;
    });
    resetTagsAll(): void;
    get tagsAllInput(): {
        [key: string]: string;
    } | undefined;
    private _defaultAction;
    get defaultAction(): LbListenerDefaultAction[];
    set defaultAction(value: LbListenerDefaultAction[]);
    get defaultActionInput(): LbListenerDefaultAction[];
    private _timeouts?;
    get timeouts(): LbListenerTimeouts;
    set timeouts(value: LbListenerTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): LbListenerTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
