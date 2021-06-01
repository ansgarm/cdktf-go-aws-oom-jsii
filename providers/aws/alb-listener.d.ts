import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AlbListenerConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#alpn_policy AlbListener#alpn_policy}.
     */
    readonly alpnPolicy?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#certificate_arn AlbListener#certificate_arn}.
     */
    readonly certificateArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#load_balancer_arn AlbListener#load_balancer_arn}.
     */
    readonly loadBalancerArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#port AlbListener#port}.
     */
    readonly port?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#protocol AlbListener#protocol}.
     */
    readonly protocol?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#ssl_policy AlbListener#ssl_policy}.
     */
    readonly sslPolicy?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#tags AlbListener#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#tags_all AlbListener#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * default_action block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#default_action AlbListener#default_action}
     */
    readonly defaultAction: AlbListenerDefaultAction[];
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#timeouts AlbListener#timeouts}
     */
    readonly timeouts?: AlbListenerTimeouts;
}
export interface AlbListenerDefaultActionAuthenticateCognito {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#authentication_request_extra_params AlbListener#authentication_request_extra_params}.
     */
    readonly authenticationRequestExtraParams?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#on_unauthenticated_request AlbListener#on_unauthenticated_request}.
     */
    readonly onUnauthenticatedRequest?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#scope AlbListener#scope}.
     */
    readonly scope?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#session_cookie_name AlbListener#session_cookie_name}.
     */
    readonly sessionCookieName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#session_timeout AlbListener#session_timeout}.
     */
    readonly sessionTimeout?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#user_pool_arn AlbListener#user_pool_arn}.
     */
    readonly userPoolArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#user_pool_client_id AlbListener#user_pool_client_id}.
     */
    readonly userPoolClientId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#user_pool_domain AlbListener#user_pool_domain}.
     */
    readonly userPoolDomain: string;
}
export interface AlbListenerDefaultActionAuthenticateOidc {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#authentication_request_extra_params AlbListener#authentication_request_extra_params}.
     */
    readonly authenticationRequestExtraParams?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#authorization_endpoint AlbListener#authorization_endpoint}.
     */
    readonly authorizationEndpoint: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#client_id AlbListener#client_id}.
     */
    readonly clientId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#client_secret AlbListener#client_secret}.
     */
    readonly clientSecret: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#issuer AlbListener#issuer}.
     */
    readonly issuer: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#on_unauthenticated_request AlbListener#on_unauthenticated_request}.
     */
    readonly onUnauthenticatedRequest?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#scope AlbListener#scope}.
     */
    readonly scope?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#session_cookie_name AlbListener#session_cookie_name}.
     */
    readonly sessionCookieName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#session_timeout AlbListener#session_timeout}.
     */
    readonly sessionTimeout?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#token_endpoint AlbListener#token_endpoint}.
     */
    readonly tokenEndpoint: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#user_info_endpoint AlbListener#user_info_endpoint}.
     */
    readonly userInfoEndpoint: string;
}
export interface AlbListenerDefaultActionFixedResponse {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#content_type AlbListener#content_type}.
     */
    readonly contentType: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#message_body AlbListener#message_body}.
     */
    readonly messageBody?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#status_code AlbListener#status_code}.
     */
    readonly statusCode?: string;
}
export interface AlbListenerDefaultActionForwardStickiness {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#duration AlbListener#duration}.
     */
    readonly duration: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#enabled AlbListener#enabled}.
     */
    readonly enabled?: boolean;
}
export interface AlbListenerDefaultActionForwardTargetGroup {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#arn AlbListener#arn}.
     */
    readonly arn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#weight AlbListener#weight}.
     */
    readonly weight?: number;
}
export interface AlbListenerDefaultActionForward {
    /**
     * stickiness block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#stickiness AlbListener#stickiness}
     */
    readonly stickiness?: AlbListenerDefaultActionForwardStickiness[];
    /**
     * target_group block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#target_group AlbListener#target_group}
     */
    readonly targetGroup: AlbListenerDefaultActionForwardTargetGroup[];
}
export interface AlbListenerDefaultActionRedirect {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#host AlbListener#host}.
     */
    readonly host?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#path AlbListener#path}.
     */
    readonly path?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#port AlbListener#port}.
     */
    readonly port?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#protocol AlbListener#protocol}.
     */
    readonly protocol?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#query AlbListener#query}.
     */
    readonly query?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#status_code AlbListener#status_code}.
     */
    readonly statusCode: string;
}
export interface AlbListenerDefaultAction {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#order AlbListener#order}.
     */
    readonly order?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#target_group_arn AlbListener#target_group_arn}.
     */
    readonly targetGroupArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#type AlbListener#type}.
     */
    readonly type: string;
    /**
     * authenticate_cognito block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#authenticate_cognito AlbListener#authenticate_cognito}
     */
    readonly authenticateCognito?: AlbListenerDefaultActionAuthenticateCognito[];
    /**
     * authenticate_oidc block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#authenticate_oidc AlbListener#authenticate_oidc}
     */
    readonly authenticateOidc?: AlbListenerDefaultActionAuthenticateOidc[];
    /**
     * fixed_response block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#fixed_response AlbListener#fixed_response}
     */
    readonly fixedResponse?: AlbListenerDefaultActionFixedResponse[];
    /**
     * forward block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#forward AlbListener#forward}
     */
    readonly forward?: AlbListenerDefaultActionForward[];
    /**
     * redirect block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#redirect AlbListener#redirect}
     */
    readonly redirect?: AlbListenerDefaultActionRedirect[];
}
export interface AlbListenerTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#read AlbListener#read}.
     */
    readonly read?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html aws_alb_listener}.
 */
export declare class AlbListener extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html aws_alb_listener} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: AlbListenerConfig);
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
    get defaultAction(): AlbListenerDefaultAction[];
    set defaultAction(value: AlbListenerDefaultAction[]);
    get defaultActionInput(): AlbListenerDefaultAction[];
    private _timeouts?;
    get timeouts(): AlbListenerTimeouts;
    set timeouts(value: AlbListenerTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): AlbListenerTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
