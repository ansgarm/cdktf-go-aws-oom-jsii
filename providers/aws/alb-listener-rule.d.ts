import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AlbListenerRuleConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#listener_arn AlbListenerRule#listener_arn}.
     */
    readonly listenerArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#priority AlbListenerRule#priority}.
     */
    readonly priority?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#tags AlbListenerRule#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#tags_all AlbListenerRule#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * action block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#action AlbListenerRule#action}
     */
    readonly action: AlbListenerRuleAction[];
    /**
     * condition block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#condition AlbListenerRule#condition}
     */
    readonly condition: AlbListenerRuleCondition[];
}
export interface AlbListenerRuleActionAuthenticateCognito {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#authentication_request_extra_params AlbListenerRule#authentication_request_extra_params}.
     */
    readonly authenticationRequestExtraParams?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#on_unauthenticated_request AlbListenerRule#on_unauthenticated_request}.
     */
    readonly onUnauthenticatedRequest?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#scope AlbListenerRule#scope}.
     */
    readonly scope?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#session_cookie_name AlbListenerRule#session_cookie_name}.
     */
    readonly sessionCookieName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#session_timeout AlbListenerRule#session_timeout}.
     */
    readonly sessionTimeout?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#user_pool_arn AlbListenerRule#user_pool_arn}.
     */
    readonly userPoolArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#user_pool_client_id AlbListenerRule#user_pool_client_id}.
     */
    readonly userPoolClientId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#user_pool_domain AlbListenerRule#user_pool_domain}.
     */
    readonly userPoolDomain: string;
}
export interface AlbListenerRuleActionAuthenticateOidc {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#authentication_request_extra_params AlbListenerRule#authentication_request_extra_params}.
     */
    readonly authenticationRequestExtraParams?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#authorization_endpoint AlbListenerRule#authorization_endpoint}.
     */
    readonly authorizationEndpoint: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#client_id AlbListenerRule#client_id}.
     */
    readonly clientId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#client_secret AlbListenerRule#client_secret}.
     */
    readonly clientSecret: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#issuer AlbListenerRule#issuer}.
     */
    readonly issuer: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#on_unauthenticated_request AlbListenerRule#on_unauthenticated_request}.
     */
    readonly onUnauthenticatedRequest?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#scope AlbListenerRule#scope}.
     */
    readonly scope?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#session_cookie_name AlbListenerRule#session_cookie_name}.
     */
    readonly sessionCookieName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#session_timeout AlbListenerRule#session_timeout}.
     */
    readonly sessionTimeout?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#token_endpoint AlbListenerRule#token_endpoint}.
     */
    readonly tokenEndpoint: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#user_info_endpoint AlbListenerRule#user_info_endpoint}.
     */
    readonly userInfoEndpoint: string;
}
export interface AlbListenerRuleActionFixedResponse {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#content_type AlbListenerRule#content_type}.
     */
    readonly contentType: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#message_body AlbListenerRule#message_body}.
     */
    readonly messageBody?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#status_code AlbListenerRule#status_code}.
     */
    readonly statusCode?: string;
}
export interface AlbListenerRuleActionForwardStickiness {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#duration AlbListenerRule#duration}.
     */
    readonly duration: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#enabled AlbListenerRule#enabled}.
     */
    readonly enabled?: boolean;
}
export interface AlbListenerRuleActionForwardTargetGroup {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#arn AlbListenerRule#arn}.
     */
    readonly arn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#weight AlbListenerRule#weight}.
     */
    readonly weight?: number;
}
export interface AlbListenerRuleActionForward {
    /**
     * stickiness block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#stickiness AlbListenerRule#stickiness}
     */
    readonly stickiness?: AlbListenerRuleActionForwardStickiness[];
    /**
     * target_group block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#target_group AlbListenerRule#target_group}
     */
    readonly targetGroup: AlbListenerRuleActionForwardTargetGroup[];
}
export interface AlbListenerRuleActionRedirect {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#host AlbListenerRule#host}.
     */
    readonly host?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#path AlbListenerRule#path}.
     */
    readonly path?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#port AlbListenerRule#port}.
     */
    readonly port?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#protocol AlbListenerRule#protocol}.
     */
    readonly protocol?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#query AlbListenerRule#query}.
     */
    readonly query?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#status_code AlbListenerRule#status_code}.
     */
    readonly statusCode: string;
}
export interface AlbListenerRuleAction {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#order AlbListenerRule#order}.
     */
    readonly order?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#target_group_arn AlbListenerRule#target_group_arn}.
     */
    readonly targetGroupArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#type AlbListenerRule#type}.
     */
    readonly type: string;
    /**
     * authenticate_cognito block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#authenticate_cognito AlbListenerRule#authenticate_cognito}
     */
    readonly authenticateCognito?: AlbListenerRuleActionAuthenticateCognito[];
    /**
     * authenticate_oidc block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#authenticate_oidc AlbListenerRule#authenticate_oidc}
     */
    readonly authenticateOidc?: AlbListenerRuleActionAuthenticateOidc[];
    /**
     * fixed_response block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#fixed_response AlbListenerRule#fixed_response}
     */
    readonly fixedResponse?: AlbListenerRuleActionFixedResponse[];
    /**
     * forward block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#forward AlbListenerRule#forward}
     */
    readonly forward?: AlbListenerRuleActionForward[];
    /**
     * redirect block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#redirect AlbListenerRule#redirect}
     */
    readonly redirect?: AlbListenerRuleActionRedirect[];
}
export interface AlbListenerRuleConditionHostHeader {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#values AlbListenerRule#values}.
     */
    readonly values: string[];
}
export interface AlbListenerRuleConditionHttpHeader {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#http_header_name AlbListenerRule#http_header_name}.
     */
    readonly httpHeaderName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#values AlbListenerRule#values}.
     */
    readonly values: string[];
}
export interface AlbListenerRuleConditionHttpRequestMethod {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#values AlbListenerRule#values}.
     */
    readonly values: string[];
}
export interface AlbListenerRuleConditionPathPattern {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#values AlbListenerRule#values}.
     */
    readonly values: string[];
}
export interface AlbListenerRuleConditionQueryString {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#key AlbListenerRule#key}.
     */
    readonly key?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#value AlbListenerRule#value}.
     */
    readonly value: string;
}
export interface AlbListenerRuleConditionSourceIp {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#values AlbListenerRule#values}.
     */
    readonly values: string[];
}
export interface AlbListenerRuleCondition {
    /**
     * host_header block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#host_header AlbListenerRule#host_header}
     */
    readonly hostHeader?: AlbListenerRuleConditionHostHeader[];
    /**
     * http_header block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#http_header AlbListenerRule#http_header}
     */
    readonly httpHeader?: AlbListenerRuleConditionHttpHeader[];
    /**
     * http_request_method block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#http_request_method AlbListenerRule#http_request_method}
     */
    readonly httpRequestMethod?: AlbListenerRuleConditionHttpRequestMethod[];
    /**
     * path_pattern block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#path_pattern AlbListenerRule#path_pattern}
     */
    readonly pathPattern?: AlbListenerRuleConditionPathPattern[];
    /**
     * query_string block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#query_string AlbListenerRule#query_string}
     */
    readonly queryString?: AlbListenerRuleConditionQueryString[];
    /**
     * source_ip block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#source_ip AlbListenerRule#source_ip}
     */
    readonly sourceIp?: AlbListenerRuleConditionSourceIp[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html aws_alb_listener_rule}.
 */
export declare class AlbListenerRule extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html aws_alb_listener_rule} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: AlbListenerRuleConfig);
    get arn(): string;
    get id(): string;
    private _listenerArn;
    get listenerArn(): string;
    set listenerArn(value: string);
    get listenerArnInput(): string;
    private _priority?;
    get priority(): number;
    set priority(value: number);
    resetPriority(): void;
    get priorityInput(): number | undefined;
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
    private _action;
    get action(): AlbListenerRuleAction[];
    set action(value: AlbListenerRuleAction[]);
    get actionInput(): AlbListenerRuleAction[];
    private _condition;
    get condition(): AlbListenerRuleCondition[];
    set condition(value: AlbListenerRuleCondition[]);
    get conditionInput(): AlbListenerRuleCondition[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
